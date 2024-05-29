import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './container/Home/Home';
import About from './container/About/About';
const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
    </div>
  )
}

export default App