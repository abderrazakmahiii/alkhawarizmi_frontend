import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Alkhawarizmi from './Components/alkhawarizmi';
import Docs from './Components/Docs';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Alkhawarizmi />
      <Docs />
      <Footer />
    </div>
  );
}

export default App;
