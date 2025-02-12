import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../firebase';

export async function GET(request: NextRequest) {
    const response = await db.collection('books').get();
    const books = response.docs.map(doc => doc.data());
    return NextResponse.json(books);
}