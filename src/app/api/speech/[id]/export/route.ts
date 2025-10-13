import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const url = new URL(request.url);
    const format = url.searchParams.get('format') || 'txt';

    const authResult = await auth();
    const { userId } = authResult;

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const speech = await prisma.speech.findFirst({
      where: { id: resolvedParams.id, userId: userId }
    });

    if (!speech) {
      return NextResponse.json({ error: "Speech not found" }, { status: 404 });
    }

    const speechTitle = speech.customTitle || speech.title;
    const speechContent = speech.content;

    switch (format.toLowerCase()) {
      case 'pdf':
        return exportToPDF(speechTitle, speechContent);
      case 'docx':
        return exportToDOCX(speechTitle, speechContent);
      case 'txt':
      default:
        return exportToText(speechTitle, speechContent);
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to export speech" }, { status: 500 });
  }
}

function exportToText(title: string, content: string) {
  const textContent = `${title}\n${'='.repeat(title.length)}\n\n${content}`;
  return new NextResponse(textContent, {
    headers: {
      'Content-Type': 'text/plain',
      'Content-Disposition': `attachment; filename="${sanitizeFilename(title)}.txt"`
    }
  });
}

async function exportToPDF(title: string, content: string) {
  const doc = new jsPDF();
  doc.setFont('helvetica');
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 20, 30);
  doc.setLineWidth(0.5);
  doc.line(20, 35, 190, 35);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  const splitContent = doc.splitTextToSize(content, 170);
  doc.text(splitContent, 20, 50);
  const pdfBuffer = doc.output('arraybuffer');

  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${sanitizeFilename(title)}.pdf"`
    }
  });
}

async function exportToDOCX(title: string, content: string) {
  const paragraphs = content.split('\n\n').filter(p => p.trim());

  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          children: [new TextRun({ text: title, bold: true, size: 32 })],
          heading: HeadingLevel.TITLE,
        }),
        new Paragraph({ children: [new TextRun({ text: "" })] }),
        ...paragraphs.map(paragraph =>
          new Paragraph({
            children: [new TextRun({ text: paragraph.trim(), size: 24 })],
          })
        ),
      ],
    }],
  });

  const docxBuffer = await Packer.toBuffer(doc);

  return new NextResponse(docxBuffer, {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'Content-Disposition': `attachment; filename="${sanitizeFilename(title)}.docx"`
    }
  });
}

function sanitizeFilename(filename: string): string {
  return filename.replace(/[^a-z0-9]/gi, '_').replace(/_+/g, '_').replace(/^_|_$/g, '').toLowerCase();
}
