import React from 'react';
import { useState, useEffect } from "react";
import MovieList from '../components/MovieList';
import "../stylesheet/Movies.css";
import PaginationBar from "../components/PaginationBar";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
// REACT_APP_TMDB_API_KEY=1505daf4cd8d956197f67c472116790b
const API_URL = process.env.REACT_APP_TMDB_API_URL;
// REACT_APP_TMDB_API_URL=https://api.themoviedb.org/3
const API_SEARCH = `${API_URL}/search/movie?api_key=${API_KEY}&query=`;
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

const NowPlayingPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [pageNum, setPageNum] = useState(1);
    useEffect(() => {
        async function fetchData() {
            const url = `${API_URL}/movie/now_playing?api_key=${API_KEY}&page=${pageNum}`;
            // https://api.themoviedb.org/3/movie/now_playing?api_key=1505daf4cd8d956197f67c472116790b
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
            console.log(data);
        }
        fetchData();
    }, [pageNum]);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(searchTerm) {
        fetch(API_SEARCH+searchTerm)
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

    const onPageChange = (pageNumArg) => {
        setPageNum(pageNumArg);
    };

    return (
        <>
        <h1>LET'S BROWSE MOVIES</h1>
        <header>
            <form onSubmit={handleOnSubmit}>
                <input className="searchbox" type="search" placeholder="Search..." 
                value={searchTerm}
                onChange={handleOnChange}/>
            </form>   
        </header>
        <PaginationBar  handlePageChange={onPageChange} currentPage={pageNum}/>
        <div className="movie-container">
            {movies.length === 0 && (
                <h1 className="error">Result not found</h1>
            )}
            {movies.length > 0 && 
                movies.map((movie) => <MovieList key={movie.id} {...movie}/>)}
        </div>
        </>
    );
}

export default NowPlayingPage
