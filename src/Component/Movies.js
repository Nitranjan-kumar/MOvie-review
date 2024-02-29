import React from "react";

const Movies = (props) => {
  return (
    <div className="movie">
      <img src={props.img} alt={props.Title} />
      <p>{props.Title}</p>
      <p>{props.Year}</p>
    </div>
  );
}

export default Movies;
