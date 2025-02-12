import {NextRequest, NextResponse} from 'next/server';
import {db} from '../../../../firebase';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function GET(request: NextRequest, {params} : Props) {
  const { slug } = await params;
  const response = await db.collection('books').where("slug", "==", slug).get();
  const book = response.docs[0].data();
  return NextResponse.json(book);
}