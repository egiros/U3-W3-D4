import { Container, Row, Col } from "react-bootstrap";

const HeadingSection = () => (
  <Container className="text-center py-4">
    <Row>
      <Col md={8} className="mx-auto">
        <h1>Welcome to SpaceFlight News</h1>
        <p className="lead text-muted">The best space flight news website the Internet can offer!</p>
      </Col>
    </Row>
  </Container>
);

export default HeadingSection;
