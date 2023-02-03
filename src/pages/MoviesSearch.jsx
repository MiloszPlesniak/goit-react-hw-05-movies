import { useState, useEffect } from 'react';

import { Route, Routes, useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/fetchMovie';
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
      const movies = await fetchMovieByQuery(searchValue);
      setMoviesList(movies);
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
        <Route path="/" element={<MovieList movieData={moviesList} />} />
      </Routes>
    </div>
  );
};

export default MoviesSearch;
