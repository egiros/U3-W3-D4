// ArticleDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article } from "./interfaces";

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article details:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.date}</p>
      <img src={article.imageUrl} alt={article.title} />
      {/* Aggiungi altre informazioni dell'articolo qui */}
    </div>
  );
};

export default ArticleDetail;
