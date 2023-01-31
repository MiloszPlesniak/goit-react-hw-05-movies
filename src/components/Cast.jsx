import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsOrCast } from 'services/fetchMovie';

const Cast = () => {
  const id = useParams().id;
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const fetchCast = async () => {
      const cast = await fetchMovieReviewsOrCast(id, 'credits');
      setCast(cast.cast)
    }
    fetchCast()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.slice(0,18).map(
            ({ credit_id, original_name, character, profile_path }) => {
              return (
                <li key={credit_id}>
                  {profile_path ?(<img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={original_name}
                    width="100"
                  />):<p>Nie załadowano</p>}
                  <h4>{original_name}</h4>
                  <p>{ character}</p>
                </li>
              );
            }
          )}
        </ul>
      ) : (
        <p>Nie podano </p>
      )}
    </div>
  );
};

export default Cast;
