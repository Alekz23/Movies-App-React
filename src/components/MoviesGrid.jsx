import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { get } from "../utils/httpClient";
import style from "../Styles/MoviesGrid.module.css";

export default function MoviesGrid() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);


  return (
    <ul className={style.moviesGrid}>
      {/* {movies.map(function (movie) {
                return <li>{movie.title}</li>
            })}
           //funcion flecha */}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
