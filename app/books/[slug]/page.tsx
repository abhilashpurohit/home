import { API_URL } from "@/config/api"
import type { Metadata } from "next"
import BookContent from "../../components/BookContent"

interface Books {
  author: string
  title: string
  blurb: string
  slug: string
}

interface Props {
  params: Promise<{ slug: string }>
}

async function getBook(slug: string): Promise<Books> {
  const res = await fetch(`${API_URL}/books/${slug}`)
  if (!res.ok) {
    throw new Error("Book not found")
  }
  return res.json()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
  const book = await getBook(slug)
  return {
    title: book.title,
    description: book.blurb,
  }
}

export default async function BookPage({ params }: Props) {
    const { slug } = await params;
  const book = await getBook(slug)

  return <BookContent book={book} />
}

