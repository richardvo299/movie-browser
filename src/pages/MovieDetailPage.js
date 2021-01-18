import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
// REACT_APP_TMDB_API_KEY=1505daf4cd8d956197f67c472116790b
const API_URL = process.env.REACT_APP_TMDB_API_URL;
// REACT_APP_TMDB_API_URL=https://api.themoviedb.org/3
const API_IMG = process.env.REACT_APP_TMDB_API_IMG;
// REACT_APP_TMDB_API_IMG=https://image.tmdb.org/t/p/w1280

const TMDB_URL = "https://www.themoviedb.org/movie/";

const MovieDetailPage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    async function fetchData() {
      const url = `${API_URL}/movie/${id}?api_key=${API_KEY}`;
      // https://api.themoviedb.org/3/movie/now_playing?api_key=1505daf4cd8d956197f67c472116790b
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
      console.log(data);
    }
    fetchData();
  }, [id]);

  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  //   one way of adding loading without using the loading page
  if (!movie) return <div>loading.....</div>;
  return (
    <div className="w-100">
      <div className="movie">
        <img src={`${API_IMG}${movie.backdrop_path}`} alt={movie.title} />
        <span className={`tag ${setVoteClass(movie.vote_average)}`}>
          {" "}
          <span class="fa fa-star checked"></span> {movie.vote_average}
        </span>
        <div className="movie-info">
          <h3>{movie.title}</h3>
        </div>
        <div className="overview">
          <h2>Summary</h2>
          <p>{movie.overview}</p>
          <a href={` ${TMDB_URL}${id}`} target="_blank" rel="noreferrer">
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
