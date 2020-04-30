import React from 'react';
import PropTypes from 'prop-types';
import Queen from './Queen.jsx';
import { Link } from 'react-router-dom';

const Queens = ({ queens }) => {
  const queenElements = queens.map(queen => (
    <Link to={`/Detail/${queen.id}`} key={queen.id}>
      <li>
        <Queen {...queen} />
      </li>
    </Link>
  ));

  return (
    <ul>
      {queenElements}
    </ul>
  );
};

Queens.propTypes = {
  queens: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default Queens;
