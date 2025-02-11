import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../firebase';

export async function GET(request: NextRequest) {
  const response = await db.collection('articles').get();
  const articles = response.docs.map(doc => doc.data());
  return NextResponse.json(articles);
}