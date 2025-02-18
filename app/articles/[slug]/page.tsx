import { API_URL } from "@/config/api";
import { Metadata } from "next";
import { cache } from "react";

interface Article {
    slug: string;
    title: string;
    content: string;
}

interface Props {
    params: Promise<any>;
}

// Caching fetch request to avoid double fetching
const getArticle = cache(async (slug: string): Promise<Article> => {
    const res = await fetch(`${API_URL}/articles/${slug}`);
    if (!res.ok) {
        throw new Error("Article not found");
    }
    return res.json();
});

// Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const article = await getArticle(slug);
    return {
        title: article.title,
        description: article.content.substring(0, 150) + "...", // Short preview
        openGraph: {
            title: article.title,
            description: article.content.substring(0, 150) + "...",
            url: `${API_URL}/articles/${slug}`,
            type: "article",
        },
    };
}

// Page Component (Reuses cached article)
export default async function ArticlePage({ params }: Props) {
    const { slug } = await params;
    const article = await getArticle(slug); // Uses cached result

    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </div>
    );
}
