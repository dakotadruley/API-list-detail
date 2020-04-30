import React, { useState, useEffect } from 'react';
import QueenDetail from '../components/Detail/QueenDetail.jsx';
import { fetchQueenById } from '../services/fetchQueenById.js';

const QueenPicker = ({ match }) => {
  console.log(match);
  const [queen, setQueen] = useState('');
 
  useEffect(() => {
    fetchQueenById(match.params.id)
      .then(queen => setQueen(queen));
  }, []);

  return (
    <>
      <QueenDetail {...queen} />
    </>
  );
};
export default QueenPicker;
