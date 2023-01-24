import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { fetchFromApiList } from 'services/fetchMovie';
import MovieList from './MovieList';
import ItemMoveList from './ItemMovieList';
import Nav from './Nav';
import MoviesSearch from './MoviesSearch';
import NotFound from './NotFound';

export const App = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const movie = await fetchFromApiList();

      setMovie(movie);
    };
    fetchMovie();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<MovieList movieData={movie} />} />

        {movie.map(({ id }) => {
          return (
            <Route
              key={id}
              path={'/movies/' + id}
              element={<ItemMoveList movieID={id} />}
            />
          );
        })}
        <Route path="/movies" element={<MoviesSearch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
