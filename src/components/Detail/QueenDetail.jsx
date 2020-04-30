import React from 'react';
import PropTypes from 'prop-types';

const QueenDetail = ({ name, image, winner, missCongeniality, quote }) => (
  <section>
    <h2>{name}</h2>
    <img src={image} />
    <p>Winner? {winner}</p>
    <p>MissCongeniality? {missCongeniality}</p>
    <p>Quote: {quote}</p>
  </section>
);
QueenDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  winner: PropTypes.bool.isRequired,
  missCongeniality: PropTypes.bool.isRequired,
  quote: PropTypes.string.isRequired
};
export default QueenDetail;
