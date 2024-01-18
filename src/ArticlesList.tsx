// ArticlesList.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Article } from "./interfaces";

const ArticlesList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
        const data = await response.json();

        if (Array.isArray(data)) {
          setArticles(data);
        } else {
          console.error("Invalid data format received from API:", data);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Spaceflight News</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <Link to={`/article/${article.id}`}>
            <h2>{article.title}</h2>
          </Link>
          <p>{article.date}</p>
          <img src={article.imageUrl} alt={article.title} />
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
