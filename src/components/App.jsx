import { Routes, Route, Navigate } from 'react-router-dom';

import { lazy, Suspense } from 'react';

const MovieList = lazy(() => import('../pages/MovieList'));
const ItemMoveList = lazy(() => import('./ItemMovieList'));
const Nav = lazy(() => import('./Nav'));
const MoviesSearch = lazy(() => import('../pages/MoviesSearch'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Suspense>
        <Routes>
          <Route path="/" element={<MovieList />} />

          <Route path="/movies/:id" element={<ItemMoveList />}>
            <Route path="Cast" element={<Cast />} />
            <Route path="Reviews" element={<Reviews />} />
          </Route>

          <Route path="/movies" element={<MoviesSearch />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
