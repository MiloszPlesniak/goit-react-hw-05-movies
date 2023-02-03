import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchFromApiList } from 'services/fetchMovie';


const MoveList = () => {
  const location = useLocation();

  const from = location.pathname + location.search;
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
      <ul>
        {movie.map(({ title, name, id }) => {
          return (
            <Link key={id} to={'/movies/' + id} state={{ from }}>
              <li>{title || name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export default MoveList;


