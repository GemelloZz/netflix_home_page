import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import MovieStar from "./Movie";
import MovieRambo from "./MovieRambo";
import SeriesNarcos from "./MovieCinepanettoni";

const TvShows = () => {
  return (
    <Container fluid className="px-4">
      <Row className="justify-content-between">
        <Col className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <Dropdown className="ms-4 mt-1">
            <Dropdown.Toggle variant="secondary" size="sm" className="rounded-0" style={{ backgroundColor: "#221f1f" }}>
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <h4>
        Trending Now
        <MovieStar />
      </h4>

      <h4>
        Watch it Again
        <MovieRambo />
      </h4>

      <h4>
        New Releases
        <SeriesNarcos />
      </h4>
    </Container>
  );
};

export default TvShows;
