import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Movies from "./Component/Movies";
import movieData from "./movie.json";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        {movieData.movies.map((element) => (
          <Movies
            Title={element.Title}
            Year={element.Year}
            img={element.Poster}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
