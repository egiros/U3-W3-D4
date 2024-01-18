import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import News from "../types/News";

const Article = () => {
  const params = useParams();
  const articleId = params.articleId;

  const [article, setArticle] = useState<News | null>(null);

  useEffect(() => {
    fetchArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchArticle = async () => {
    try {
      const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles/" + articleId);
      if (response.ok) {
        const data: News = await response.json();
        setArticle(data);
      } else {
        throw new Error("Errore nel recupero dell'articolo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          {article ? (
            <>
              <img src={article.imageUrl} alt="article-pic" style={{ height: "20em", width: "auto" }} />
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
              <p>Published at: {new Date(article.publishedAt).toLocaleTimeString("en-US")}</p>
              <Button variant="success" onClick={() => window.location.assign(article.url)}>
                READ THE FULL ARTICLE
              </Button>
              <Link to="/" className="ms-5">
                <Button variant="dark">BACK TO HOME</Button>
              </Link>
            </>
          ) : (
            <Spinner variant="info" animation="border" />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Article;
