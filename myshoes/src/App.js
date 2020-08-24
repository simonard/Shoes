import React from 'react';
import './App.css';
import TopComponent from './Components/TopComponent';
import BottomComponent from './Components/BottomComponent';

function App() {
  return (   
      <React.Fragment>
        <TopComponent></TopComponent>
        <BottomComponent></BottomComponent>
      </React.Fragment>    
  );
}

export default App;
