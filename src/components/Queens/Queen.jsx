import React from 'react';
import PropTypes from 'prop-types';

const Queen = ({ name, image, url }) => (
  <section>
    <a href={url}>{name}</a>
    <img src={image} />
  </section>
);

Queen.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Queen;
