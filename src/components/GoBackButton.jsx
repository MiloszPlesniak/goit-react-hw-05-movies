import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GoBackButton = ({ backHref }) => {
  return <Link to={backHref}>Go back</Link>;
};

export default GoBackButton;

GoBackButton.propTypes = {
  backHref: PropTypes.string,
};
