import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './container/Home/Home';
import About from './container/About/About';
import Steps from './container/Steps/Steps';
import Products from './container/Products/Products';
import Questions from './container/FAQs/Questions';
const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Steps/>
      <Products/>
      <Questions/>
    </div>
  )
}

export default App