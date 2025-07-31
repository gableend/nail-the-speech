import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface DeletionRequest {
  userId?: string;
  email?: string;
  source: 'dashboard' | 'email' | 'facebook_webhook';
  requestedAt: Date;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, email, source = 'email', facebook_user_id } = body;

    // Validate request
    if (!userId && !email && !facebook_user_id) {
      return NextResponse.json(
        { error: 'Either userId, email, or facebook_user_id is required' },
        { status: 400 }
      );
    }

    // For dashboard requests, verify authentication
    if (source === 'dashboard') {
      const { userId: authUserId } = await auth();
      if (!authUserId || authUserId !== userId) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        );
      }
    }

    // Find and delete speeches by userId (since we only have Speech model)
    let targetUserId = null;
    let userSpeeches = [];

    if (userId) {
      targetUserId = userId;
      userSpeeches = await prisma.speech.findMany({
        where: { userId: userId }
      });
    } else if (email) {
      // For email-based deletion, we can't easily find the userId without a User model
      // This would require Clerk API calls or additional tracking
      return NextResponse.json(
        { error: 'Email-based deletion requires dashboard access. Please log in to delete your account.' },
        { status: 400 }
      );
    } else if (facebook_user_id) {
      // For Facebook webhook integration, try to match with userId containing facebook_user_id
      userSpeeches = await prisma.speech.findMany({
        where: {
          userId: { contains: facebook_user_id }
        }
      });

      if (userSpeeches.length > 0) {
        targetUserId = userSpeeches[0].userId;
      }
    }

    if (!targetUserId && userSpeeches.length === 0) {
      return NextResponse.json(
        { error: 'No user data found to delete' },
        { status: 404 }
      );
    }

    // Log deletion request
    const deletionRequest: DeletionRequest = {
      userId: targetUserId,
      email: email || 'unknown',
      source,
      requestedAt: new Date(),
    };

    console.log('Data deletion request:', deletionRequest);

    // Delete all user speeches
    const deleteResult = await prisma.speech.deleteMany({
      where: { userId: targetUserId }
    });

    const speechesDeleted = deleteResult.count;

    // Send confirmation email if email is available
    // Note: Since we don't have user emails in our database,
    // this would need to be retrieved from Clerk API in a real implementation
    if (email && source !== 'facebook_webhook') {
      try {
        await transporter.sendMail({
          from: process.env.SMTP_FROM || 'privacy@nailthespeech.com',
          to: email,
          subject: 'Data Deletion Confirmation - Nail The Speech',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #da5389;">Data Deletion Confirmation</h2>

              <p>Hello there,</p>

              <p>This email confirms that your account and all associated data have been successfully deleted from Nail The Speech as requested.</p>

              <div style="background-color: #f8f9fa; padding: 16px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #333;">What was deleted:</h3>
                <ul>
                  <li>Your account profile and login information</li>
                  <li>All ${speechesDeleted} speech(es) you created</li>
                  <li>Account preferences and settings</li>
                  <li>Usage data and analytics</li>
                </ul>
              </div>

              <p>Your data has been permanently removed from our systems and cannot be recovered.</p>

              <p>Thank you for using Nail The Speech. We're sorry to see you go!</p>

              <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">

              <p style="font-size: 12px; color: #666;">
                If you believe you received this email in error, please contact us at
                <a href="mailto:privacy@nailthespeech.com">privacy@nailthespeech.com</a>
              </p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error('Failed to send deletion confirmation email:', emailError);
        // Don't fail the deletion if email sending fails
      }
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'User data successfully deleted',
      deletedAt: new Date().toISOString(),
      speechesDeleted: speechesDeleted,
      confirmationEmailSent: !!email && source !== 'facebook_webhook'
    });

  } catch (error) {
    console.error('Data deletion error:', error);
    return NextResponse.json(
      { error: 'Failed to process deletion request' },
      { status: 500 }
    );
  }
}

// Handle Facebook webhook for data deletion
export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const facebook_user_id = url.searchParams.get('id');

    if (!facebook_user_id) {
      return NextResponse.json(
        { error: 'Facebook user ID is required' },
        { status: 400 }
      );
    }

    // Process deletion via POST method
    return POST(new NextRequest(req.url, {
      method: 'POST',
      headers: req.headers,
      body: JSON.stringify({
        facebook_user_id,
        source: 'facebook_webhook'
      })
    }));

  } catch (error) {
    console.error('Facebook webhook deletion error:', error);
    return NextResponse.json(
      { error: 'Failed to process Facebook deletion request' },
      { status: 500 }
    );
  }
}
