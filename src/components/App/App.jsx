import React from 'react';
import '../../App.css';
import {
  Route, 
  Switch,  
  BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import DetailContainer from '../../containers/DetailContainer.jsx';
import QueenContainer from '../../containers/QueenContainer.jsx';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/Detail/:id' component={DetailContainer} />
          <Route path='/Queens' component={QueenContainer} /> 
        </Switch>
      </Router>
    </>
  );
}
  
