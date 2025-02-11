import {NextRequest, NextResponse} from 'next/server';
import {db} from '../../../../firebase';

interface Props {
    params: {slug: string};
}

export async function GET(request: Request, {params}: Props) {
  const { slug } = params;
  const response = await db.collection('articles').where("slug", "==", slug).get();
  const article = response.docs[0].data();
  return NextResponse.json(article);
}