import React, { useState, useEffect } from 'react';
import QueenDetail from '../components/Detail/QueenDetail.jsx';

const QueenPicker = () => {
  const [color, setColor] = useState('#FF0000');
  const [name, setName] = useState('red');

  const state = {
    id:'number',
    name: 'string',
    url: 'string',
    loading:
  }

  const handleChange = ({ target }) => {
    if(target.name === 'color') setColor(target.value);
    if(target.name === 'name') setName(target.value);
  };

  return (
    <>
    <QueenDetail />
    </>
  );
};
export default QueenPicker;
