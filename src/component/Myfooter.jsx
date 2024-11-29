import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Button } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col className="col-6">
            {/* Icone Social */}
            <Row>
              <Col className="mb-2"></Col>
            </Row>

            {/* Links Footer */}
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Audio and Subtitles
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Privacy
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Contact us
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Legal Notices
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Cookie Preferences
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Gift Cards
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Corporate Information
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Bottone per il codice di servizio */}
            <Row>
              <Col className="mb-2">
                <Button variant="secondary" size="sm" className="footer-button rounded-0 mt-3">
                  Service Code
                </Button>
              </Col>
            </Row>

            {/* Copyright */}
            <Row>
              <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
