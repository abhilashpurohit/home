import { API_URL } from "@/config/api";
import Link from "next/link";

interface Article {
    slug: string;
    title: string;
    content: string;
}

export default async function Articles(){
    const response = await fetch(`${API_URL}/articles`);
    const articles: Article[] = await response.json();
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