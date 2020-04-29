import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, html_url }) => (
  <a href={html_url}>{name}</a>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Repo;
