import React from "react";
import { Link } from "react-router-dom";

import style from "../Styles/MovieCard.module.css";

export default function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={style.movieCard}>
      <Link to={"/movies/"+ movie.id}>
      <img
        width={230}
        height={345}
        src={imageUrl}
        alt={movie.title}
        className={style.movieImage}
      ></img>
      </Link>
      <div> {movie.title} </div>
    </li>
  );
}
