"use client";
import { NextResponse, NextRequest } from "next/server";
import { API_URL } from "@/config/api";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Article {
    slug: string;
    title: string;
    content: string;
}

export default function Article(){

    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        async function getArticle() {
            const response = await fetch(`${API_URL}/articles`);
            if(!response.ok){
                return NextResponse.error();
            }
            const articles: Article[] = await response.json();
            setArticles(articles);
        }
        getArticle();
    },[])
    return (
        <div>
            {articles.map((article) => (
                <Link href={`/articles/${article.slug}`} key={article.slug} className="border p-4 mb-4 block">
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                </Link>
            ))}
        </div>
    );
}