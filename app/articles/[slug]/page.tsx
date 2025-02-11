import { API_URL } from "@/config/api";

interface Article {
    slug: string;
    title: string;
    content: string;
}

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function Article({params} : Props){
    const { slug } = await params;
    const res = await fetch(`${API_URL}/articles/${slug}`);
    const article: Article = await res.json();
    return (
        <div key={article.slug}>
            <h2 className="text-2xl font-semibold">{article.title}</h2>
            <p>{article.content}</p>
        </div>
    );
}