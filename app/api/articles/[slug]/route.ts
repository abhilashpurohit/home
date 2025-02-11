import {NextRequest, NextResponse} from 'next/server';
import {db} from '../../../../firebase';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function GET(request: NextRequest, {params} : Props) {
  const { slug } = await params;
  const response = await db.collection('articles').where("slug", "==", slug).get();
  const article = response.docs[0].data();
  return NextResponse.json(article);
}