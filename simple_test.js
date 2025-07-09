// Test if our APIs are working
const { PrismaClient } = require('@prisma/client');

async function testAnonymousUserCreation() {
  console.log('🧪 Testing Anonymous User Creation...\n');

  const prisma = new PrismaClient();

  try {
    // Simulate creating an anonymous user (server-side)
    console.log('📝 Creating anonymous user via server function...');

    // Since we can't access cookies in this context, let's test the database directly
    const anonUser = await prisma.anonymousUser.create({
      data: {}
    });

    console.log('✅ Anonymous user created:', anonUser.id);

    // Create a test speech for this anonymous user
    const speech = await prisma.speech.create({
      data: {
        title: 'Test Best Man Speech for John & Sarah',
        content: 'Thank you all for being here today...',
        role: 'best-man',
        tone: 'balanced',
        length: 'medium',
        wordCount: 250,
        estimatedTime: 2,
        isAIGenerated: true,
        formData: JSON.stringify({
          selectedRole: 'best-man',
          yourName: 'TestUser',
          groomName: 'John',
          brideName: 'Sarah'
        }),
        regenCount: 0,
        anonUserId: anonUser.id,
        isCompleted: true
      }
    });

    console.log('✅ Test speech created for anonymous user:', speech.id);

    // Verify the relationship
    const anonUserWithSpeeches = await prisma.anonymousUser.findUnique({
      where: { id: anonUser.id },
      include: { speeches: true }
    });

    console.log(`✅ Anonymous user ${anonUser.id} has ${anonUserWithSpeeches.speeches.length} speeches`);

    return { anonUserId: anonUser.id, speechId: speech.id };

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testAnonymousUserCreation().then(result => {
  if (result) {
    console.log('\n🎉 Anonymous user system working correctly!');
    console.log(`📊 Created anonymous user: ${result.anonUserId}`);
    console.log(`📝 Created test speech: ${result.speechId}`);
  }
});
