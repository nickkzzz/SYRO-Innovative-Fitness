import { NextResponse } from 'next/server';

// Forces Next.js to fetch fresh images instead of serving a cached version
export const revalidate = 0; 

export async function GET() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  // 1. Safety check to ensure your .env variables are actually loading
  if (!cloudName || !apiKey || !apiSecret) {
    return NextResponse.json({ error: "Missing Cloudinary keys in .env.local" });
  }

  // 2. We use the Search API which is much more reliable for folders
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`;
  
  try {
    const response = await fetch(url, {
      method: 'POST', // The search API requires a POST request
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`
      },
      body: JSON.stringify({
        expression: 'folder:syro_offers', // Explicitly look inside the folder
        sort_by: [{ created_at: 'desc' }] // Show the newest posters first
      })
    });
    
    const data = await response.json();
    
    // 3. If Cloudinary rejects the request, we return the exact error message
    if (data.error) {
      return NextResponse.json({ error: data.error.message });
    }
    
    // 4. Map the images for the frontend carousel
    const posters = (data.resources || []).map((img: any) => ({
      imageUrl: img.secure_url
    }));

    return NextResponse.json(posters);
  } catch (error) {
    console.error("Cloudinary fetch error:", error);
    return NextResponse.json({ error: "Internal server crash" });
  }
}