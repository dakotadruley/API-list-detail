import React from 'react';
import PropTypes from 'prop-types';
import Queen from './Queen.jsx';

const Queens = ({ queens }) => {
  const queenElements = queens.map(queen => (
    <li key={queen.id}>
      <Queen {...queen} />
    </li>
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
