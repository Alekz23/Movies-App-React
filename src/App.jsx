import MoviesGrid from "./components/MoviesGrid";
import style from "./Styles/App.module.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={style.title}>Movies</h1>
        </Link>

      </header>
      <main>
        <Routes>
          <Route exact path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  );
}
