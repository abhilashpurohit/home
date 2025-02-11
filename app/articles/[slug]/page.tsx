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
    const data = await res.json();
    const articles: Article[] = data.articles;
    return (
        <div>
            {articles.map((article) => (
                <div key={article.title}>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                </div>
            ))}
        </div>
    );
}