import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams(); // Otteniamo l'ID del film dalla URL
  const [movieDetails, setMovieDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch dei dettagli del film
    fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=YOUR_OMDB_API_KEY`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel recupero dei dettagli del film");
        }
        return response.json();
      })
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    // Fetch dei commenti del film
    fetch(`https://api.tuadatabase.com/movies/${movieId}/comments`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel recupero dei commenti");
        }
        return response.json();
      })
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [movieId]); // Effettua una nuova fetch ogni volta che l'ID cambia

  if (loading) return <div>Caricamento...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>{movieDetails?.Title}</h1>
      <p>{movieDetails?.Plot}</p>
      <p>
        <strong>Anno:</strong> {movieDetails?.Year}
      </p>
      <p>
        <strong>Genere:</strong> {movieDetails?.Genre}
      </p>

      <h2>Commenti</h2>
      <ul>{comments.length > 0 ? comments.map((comment) => <li key={comment.id}>{comment.text}</li>) : <p>Nessun commento disponibile.</p>}</ul>
    </div>
  );
};

export default MovieDetails;
