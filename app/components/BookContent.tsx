"use client"

import { useState } from "react"

interface Books {
  author: string
  title: string
  blurb: string
  slug: string
}

export default function BookContent({ book }: { book: Books }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div key={book.slug} className="border p-4 mb-4 block">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{isExpanded ? book.blurb : `${book.blurb.slice(0, 100)}...`}</p>
      <button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Read Less" : "Read More"}</button>
    </div>
  )
}

