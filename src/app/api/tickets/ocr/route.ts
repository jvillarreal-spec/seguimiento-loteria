import { NextResponse } from 'next/server';
import { parseOCRText } from '@/lib/ocr-parser';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const image = formData.get('image') as File;

        if (!image) {
            return NextResponse.json({ error: 'No image provided' }, { status: 400 });
        }

        // In a real implementation, we would:
        // 1. Upload the image to S3/Cloud Storage
        // 2. Call a Cloud OCR service (Google Vision, AWS Textract) or Tesseract local
        // 3. Parse the resulting text

        // MOCK OCR PROCESS:
        const mockOCRResult = "BALOTO FECHA: 04/02/2026 NUMEROS: 12 25 31 04 18 ESTRELLA: 07";
        const parsed = parseOCRText(mockOCRResult);

        return NextResponse.json({
            ticket_id: 'tk_' + Math.random().toString(36).substr(2, 9),
            parsed,
            raw: mockOCRResult
        });
    } catch (error) {
        console.error('OCR Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
