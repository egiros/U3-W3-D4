import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import News from "../types/News";
import HeadingSection from "./HeadingSection";
import SingleNews from "./SingleNews";

const Gallery = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      if (response.ok) {
        const data: News[] = await response.json();
        setNews(data);
      } else {
        throw new Error("Errore nel recupero degli articoli");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <HeadingSection />
      <Row className="row-cols-3 g-3">
        {news.map((n) => (
          <Col key={n.id}>
            <SingleNews news={n} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
