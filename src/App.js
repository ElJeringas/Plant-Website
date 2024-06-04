import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './container/Home/Home';
import About from './container/About/About';
import Steps from './container/Steps/Steps';
import Products from './container/Products/Products';
import Questions from './container/FAQs/Questions';
import Contact from './container/Contacts/Contact';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Steps/>
      <Products/>
      <Questions/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App