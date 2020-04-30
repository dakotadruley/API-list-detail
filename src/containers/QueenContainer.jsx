import React, { useState, useEffect } from 'react';
import Queens from '../components/Queens/Queens.jsx';
import { fetchQueens } from '../services/fetchQueens.js';

const QueenPicker = () => {
  const [queens, setQueens] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchQueens()
      .then(Queens => setQueens(Queens))
      .then(() => setLoading(false));
  }, []);

  if(loading) return <h1>LOADIN</h1>;
  return (
    <>
      <Queens queens={queens} />
    </>
  );
};
export default QueenPicker;
