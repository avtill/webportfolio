import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Omnie from './components/Omnie/Omnie';

function App(){
  
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Omnie />
    </div>
  );
}

export default App;
