import React from 'react';
// import '../../App.css';
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
          <Route exact path='/' component={QueenContainer} /> 
          <Route exact path='/Detail/:id' component={DetailContainer} />
        </Switch>
      </Router>
    </>
  );
}
  
