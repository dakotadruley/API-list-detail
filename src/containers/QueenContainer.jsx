import React, { useState, useEffect } from 'react';
import Queens from '../../components/Queens/Queens.jsx';
import Queen from '../../components/Queens/Queen.jsx';
import Header from '../../components/Header/Header.jsx';

const QueenPicker = () => {
  const [color, setColor] = useState('#FF0000');
  const [name, setName] = useState('red');

  const handleChange = ({ target }) => {
    if(target.name === 'color') setColor(target.value);
    if(target.name === 'name') setName(target.value);
  };

  return (
    <>
      <Controls color={color} name={name} onChange={handleChange} />
      <Display color={color} name={name} />
    </>
  );
};
export default ColorPicker;
