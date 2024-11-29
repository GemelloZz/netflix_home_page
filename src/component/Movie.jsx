import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Spinner, Alert } from "react-bootstrap";

class MovieStar extends Component {
  state = {
    arrayFilms: [],
    isLoading: true,
    notFound: false,
  };

  getFilms = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=bfb62e62&s=Star Wars")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata API");
        }
      })
      .then((data) => {
        this.setState({ arrayFilms: data.Search || [], isLoading: false });
      })
      .catch((error) => {
        console.error("Errore:", error);
        this.setState({
          isLoading: false,
          notFound: true,
        });
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
        {this.state.isLoading && (
          <Spinner animation="border" role="status" variant="success">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
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

export default MovieStar;
