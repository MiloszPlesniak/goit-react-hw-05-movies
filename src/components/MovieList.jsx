
import { Link } from 'react-router-dom';

const MoveList = ({ movieData }) => {
  return (
    <div>
      <ul>
        {movieData.map(({ title, name, id }) => {
          return (
            <Link key={id} to={'/movies/' + id}>
              <li>{title || name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export default MoveList;
