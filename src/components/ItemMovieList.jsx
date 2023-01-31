import { fetchMovieDetails } from 'services/fetchMovie';
import { useEffect, useState } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import GoBackButton from './GoBackButton';

const ItemMoveList = () => {
  const [movieData, setMovieData] = useState({});
  const id = useParams().id;
  const location = useLocation()
  const backHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchData = async () => {
      const details = await fetchMovieDetails(id);

      const { original_title, release_date, overview, genres, vote_average } =
        details;
      const genresString = genres
        .map(item => {
          return item.name;
        })
        .toString();

      const filtredDetails = {
        vote_average: vote_average
          ? (vote_average * 10).toFixed(0) + '%'
          : 'Brak ocen',
        original_title,
        release_date: release_date.slice(0, 4),
        overview,
        genresString,
      };

      setMovieData(filtredDetails);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { original_title, release_date, overview, genresString, vote_average } =
    movieData;

  return (
    <div>
      <GoBackButton backHref={backHref} />
      <h2>
        {original_title} ({release_date})
      </h2>
      <p>User Score: {vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>{genresString}</p>
      <Link to={'Cast'}>Cast </Link>
      <Link to={'Reviews'}>Reviews</Link>
      <Outlet />
    </div>
  );
};

export default ItemMoveList;
