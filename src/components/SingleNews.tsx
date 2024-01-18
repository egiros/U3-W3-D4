import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import News from "../types/News";

interface SingleNewsProps {
  news: News;
}

const SingleNews = ({ news }: SingleNewsProps) => {
  const navigate = useNavigate();

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={news.imageUrl} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>{news.summary}</Card.Text>
        <Card.Text>{new Date(news.publishedAt).toLocaleTimeString("en-US")}</Card.Text>
        <Button variant="dark" onClick={() => navigate("/article/" + news.id)}>
          Go to the news!
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleNews;
