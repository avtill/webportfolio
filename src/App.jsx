import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Omnie from './components/Omnie/Omnie';
import Programowanie from './components/Programowanie/Programowanie';
import Portfolio from './components/Portfolio/Portfolio';
import Kontakt from './components/Kontakt/Kontakt';

function App(){
  
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Omnie />
      <Programowanie />
      <Portfolio />
      <Kontakt />
    </div>
  );
}

export default App;
