import React from 'react';

import Navbar from './layout/navbar/Navbar.component';
import Homepage from './pages/home/Home.page';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
