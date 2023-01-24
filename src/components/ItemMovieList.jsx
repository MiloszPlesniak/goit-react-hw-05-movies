import { fetchMovieDetails } from 'services/fetchMovie';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ItemMoveList = ({ movieID }) => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const details = await fetchMovieDetails(movieID);

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
  console.log(movieData);
  return (
    <div>
      <h2>
        {original_title} ({release_date})
      </h2>
      <p>User Score: {vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>{genresString}</p>
    </div>
  );
};

ItemMoveList.propTypes = {
  movieID: PropTypes.number.isRequired,
};

export default ItemMoveList;
