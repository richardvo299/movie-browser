import React from "react";
import { Link } from "react-router-dom";

const API_IMG = process.env.REACT_APP_TMDB_API_IMG;
// REACT_APP_TMDB_API_IMG=https://image.tmdb.org/t/p/w1280

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const MovieList = ({ title, poster_path, overview, vote_average, id }) => {
  const linkToImage = `${API_IMG}${poster_path}`;
  return (
    <div className="movie">
      <img src={linkToImage} alt={title} />
      <span className={`tag ${setVoteClass(vote_average)}`}>
        {" "}
        <span class="fa fa-star checked"></span> {vote_average}
      </span>
      <div className="movie-info">
        <h3>{title}</h3>
      </div>
      <div className="overview">
        <h2>Summary</h2>
        <p>{overview}</p>
        <Link to={`/movie/${id}`} key={id}>
          See More
        </Link>
      </div>
    </div>
  );
};

export default MovieList;
