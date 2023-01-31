import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoveList = ({ movieData }) => {
  const location = useLocation();

  const from = location.pathname + location.search;
  
  return (
    <div>
      <ul>
        {movieData.map(({ title, name, id }) => {
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

MoveList.propTypes = {
  movieData: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool,
        PropTypes.array,
      ])
    )
  ),
};
