'use client';
import { API_URL } from "@/config/api";
import { useEffect, useState } from "react";
import { NextResponse } from "next/server";

interface Article {
    slug: string;
    title: string;
    content: string;
}

interface Props {
    params: Promise<{ slug: string }>;
}

export default function Article({params} : Props){

    const [article, setArticle] = useState<Article>();

    useEffect(() => {
        async function getArticle() {
            const { slug } = await params;
            const response = await fetch(`${API_URL}/articles/${slug}`);
            if(!response.ok){
                return NextResponse.error();
            }
            const articleData: Article = await response.json();
            setArticle(articleData);
        }
        getArticle();
    },[])

    return (
        <div>
            <p>{article?.slug}</p>
            <h2 className="font-semibold text-2xl">{article?.title}</h2>
            <p>{article?.content}</p>
        </div>
    );
}