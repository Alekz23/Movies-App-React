import React from "react";
import movie from "./movie.json";
import styles from "../Styles/MovieDetails.module.css";

export default function MovieDetails() {
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img className={styles.col +" "+ styles.img} src={imageUrl} alt={movie.title}></img>

      <div className={styles.col +" "+ styles.text }>
          <p className={styles.firstItem}><strong>Title:</strong>  {movie.title}</p>
          <p>
             <strong>Géneros: </strong> {movie.genres.map(genre=> genre.name).join(", ")}
          </p>
          <p> <strong> Description: </strong> {movie.overview}</p>
      </div>
    </div>
  );
}
