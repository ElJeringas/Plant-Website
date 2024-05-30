import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './container/Home/Home';
import About from './container/About/About';
import Steps from './container/Steps/Steps';
import Products from './container/Products/Products';
const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Steps/>
      <Products/>
    </div>
  )
}

export default App