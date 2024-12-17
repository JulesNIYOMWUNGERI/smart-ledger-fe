import cloudinary from '@/app/utils/cloudinary';
import multer from 'multer';
import { NextRequest, NextResponse } from 'next/server';
import { Readable } from 'stream';

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware to run multer
async function runMiddleware(req: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, {}, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      resolve(result);
    });
  });
}

// Convert NextRequest body to a format multer can process
async function toNodeRequest(req: NextRequest): Promise<any> {
  const contentType = req.headers.get('content-type') || '';
  if (!contentType.includes('multipart/form-data')) {
    throw new Error('Invalid content-type. Expected multipart/form-data.');
  }

  const body = await req.arrayBuffer();
  const buffer = Buffer.from(body);
  const readable = new Readable();
  readable.push(buffer);
  readable.push(null);

  // Mock Node.js-style req object
  return Object.assign(readable, {
    headers: Object.fromEntries(req.headers),
    method: req.method,
    url: req.url,
  });
}

// Disable body parsing by Next.js
export const config = {
  api: { bodyParser: false },
};

// Named export for POST
export async function POST(req: NextRequest) {
  try {
    // Convert NextRequest to a Node.js-style req object
    const nodeReq = await toNodeRequest(req);

    // Run multer to handle file upload
    await runMiddleware(nodeReq, upload.single('file'));

    if (!nodeReq.file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const fileBuffer = nodeReq.file.buffer;

    // Upload the file to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'smart-ledger' },
        (error: any, result: any) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      uploadStream.end(fileBuffer);
    });

    return NextResponse.json({ url: (result as any).secure_url });
  } catch (error: any) {
    console.error('Image upload error:', error);
    return NextResponse.json({ error: 'Image upload failed', details: error.message }, { status: 500 });
  }
}
