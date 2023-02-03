import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsOrCast } from 'services/fetchMovie';

const Reviews = () => {
  const { id } = useParams();
  const [userReviews, setuserReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await fetchMovieReviewsOrCast(id, 'reviews');
      setuserReviews(reviews.results);
    };
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {userReviews.length > 0 ? (
        <ul>
          {userReviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Brak opini</p>
      )}
    </div>
  );
};
export default Reviews;
