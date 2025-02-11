import { API_URL } from "@/config/api";

interface Article {
    slug: string;
    title: string;
    content: string;
}

interface Props {
    params: { slug: string };
}

export default async function ArticlePage({params} : Props){
    const { slug } = await params;
    const res = await fetch(`${API_URL}/articles/${slug}`);
    const data = await res.json();
    const article: Article = data;
    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </div>
    );
}