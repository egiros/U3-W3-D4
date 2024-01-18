import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => (
  <Navbar data-bs-theme="dark" bg="dark" expand="lg">
    <Container>
      <Navbar.Brand>
        <Link to="/">Spaceflight News</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNavbar;
