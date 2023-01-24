import { element } from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import { fetchMovieForKeyword } from 'services/fetchMovie';
import ItemMoveList from './ItemMovieList';
import MovieList from './MovieList';

const MoviesSearch = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query');

  const searchMovieForKeyword = async e => {
    e.preventDefault();
    const query = e.target.input.value;
    setSearchParams({ query });
  };
  useEffect(() => {
    const fetchList = async () => {
      const movies = await fetchMovieForKeyword(searchValue);
      setMoviesList(movies);
      console.log(movies);
    };
    fetchList();
  }, [searchValue]);

  return (
    <div>
      <form onSubmit={searchMovieForKeyword}>
        <input name="input" />
        <button type="submit">Search</button>
      </form>
      <Routes>
        {moviesList.map(({ id }) => {
          return (
            <Route
              key={id}
              path={'/' + id}
              element={<ItemMoveList movieID={id} />}
            />
          );
        })}
        <Route path="/" element={<MovieList movieData={moviesList} />} />
      </Routes>
    </div>
  );
};

export default MoviesSearch;
