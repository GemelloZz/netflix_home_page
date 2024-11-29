import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

class SeriesNarcos extends Component {
  state = {
    arrayFilms: [],
  };

  getFilms = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=bfb62e62&s=narcos")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata API");
        }
      })
      .then((data) => {
        this.setState({ arrayFilms: data.Search || [] });
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  };

  componentDidMount() {
    this.getFilms();
  }

  render() {
    const { arrayFilms } = this.state;
    console.log(arrayFilms);
    return (
      <>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {arrayFilms.slice(0, 6).map((film, index) => (
            <Col key={index} className="mb-2 text-center px-1">
              <img className="img-fluid" src={film.Poster} alt="movie picture" />
              <p className=" text-light">{film.Title}</p>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default SeriesNarcos;
