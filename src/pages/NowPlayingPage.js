import React from "react";
import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import "../stylesheet/Movies.css";
import PaginationBar from "../components/PaginationBar";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
// REACT_APP_TMDB_API_KEY=1505daf4cd8d956197f67c472116790b
const API_URL = process.env.REACT_APP_TMDB_API_URL;
// REACT_APP_TMDB_API_URL=https://api.themoviedb.org/3
const API_SEARCH = `${API_URL}/search/movie?api_key=${API_KEY}&query=`;
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

const NowPlayingPage = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const limit = 20;
  const [currentPage, setCurrentPage] = useState([1]);
  const [totalPageNum, setTotalPageNum] = useState([1]);
  useEffect(() => {
    async function fetchData() {
      let endpoint = "now_playing";
      if (type === "top_rated") {
        endpoint = "top_rated";
      }
      if (type === "upcoming") {
        endpoint = "upcoming";
      }
      let url = `${API_URL}/movie/${endpoint}?api_key=${API_KEY}&page=${pageNum}`;
      // https://api.themoviedb.org/3/movie/now_playing?api_key=1505daf4cd8d956197f67c472116790b
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      setTotalPageNum(data.total_pages);
      console.log(data);
    }
    fetchData();
  }, [type, pageNum]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      fetch(API_SEARCH + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });

      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  // change parameter & add more setCurrentPage
  const onPageChange = (page) => {
    setPageNum(page);
    setCurrentPage(page);
  };

  return (
    <>
      <h1>LET'S BROWSE MOVIES</h1>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="searchbox"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <PaginationBar
        currentPage={currentPage}
        click={onPageChange}
        limit={limit}
        totalPageNum={totalPageNum}
      />
      <div className="movie-container">
        {movies.length === 0 && <h1 className="error">Result not found</h1>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieList key={movie.id} {...movie} />)}
      </div>
    </>
  );
};

export default NowPlayingPage;
