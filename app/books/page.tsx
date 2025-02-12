'use client'
import { API_URL } from "@/config/api";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Books {
    author: string;
    title: string;
    blurb: string;
    slug: string;
}

export default function Books(){
    const [books, setBooks] = useState<Books[]>([]);

    useEffect(() => {
        async function getBooks() {   
            const response = await fetch(`${API_URL}/books`);
            const booksData = await response.json();
            setBooks(booksData);
        }

        getBooks();
    }, [])
    return (
        <div>
            {books.map((book) => (
                <Link href={`/books/${book.slug}`} key={book.slug} className="border p-4 mb-4 block">
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <p>{book.blurb}</p>
                </Link>
            ))}
        </div>
    );
}