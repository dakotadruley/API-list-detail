import React from 'react';
import PropTypes from 'prop-types';

const QueenDetail = ({ name, onChange }) => (
  <>
    <input type="color" value={color} name="color" onChange={onChange} />
    <input type="text" value={name} name="name" onChange={onChange} />
  </>
);
QueenDetail.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default QueenDetail;
