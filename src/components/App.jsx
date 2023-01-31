import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { fetchFromApiList } from 'services/fetchMovie';
import { lazy,Suspense } from 'react';

const MovieList = lazy(() => import("./MovieList"))
const ItemMoveList = lazy(()=> import("./ItemMovieList"))
const Nav = lazy(()=> import("./Nav"))
const MoviesSearch = lazy(()=> import("./MoviesSearch"))
const  Cast = lazy(()=> import("./Cast"))
const Reviews = lazy(() => import('./Reviews'));
const NotFound = lazy(()=> import("./NotFound"))

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
      <Suspense>
        <Routes>
          <Route path="/" element={<MovieList movieData={movie} />} />

          <Route path="/movies/:id" element={<ItemMoveList />}>
            <Route path="Cast" element={<Cast />} />
            <Route path="Reviews" element={<Reviews />} />
          </Route>

          <Route path="/movies" element={<MoviesSearch />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
