import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" style={{ backgroundColor: "#221f1f" }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="../logo.png" alt="Logo" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">
                TV Shows
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">
                Movies
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">
                Recently Added
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="fw-bold">
                My List
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="d-flex align-items-center">
            <div></div>
            <div></div>
            <div></div>
            <div id="kids" className="fw-bold" style={{ marginRight: "1rem" }}>
              KIDS
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
