import React from 'react';
import { useRouteMatch, Link, useHistory }  from 'react-router-dom';


const MovieList = ({movies}) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({movie}) {
  const { title, director, metascore } = movie;
  const {url, ...route} = useRouteMatch();

  return (
    <div className="movie-card">
      <Link to={`${url === '/' ? '' : url}/movies/${movie.id}`}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      </Link>
    </div>
    
  );
}

export default MovieList;