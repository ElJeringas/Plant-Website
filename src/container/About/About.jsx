import React from 'react';
import aboutImg from '../../assets/images/about.png'
import { FaSquareCheck } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";
import './About.css';
const About = () => {
  return (
    <section className='about section container' id='about'>
        <div className='about__container grid'>
            <img src={aboutImg} alt='about' className='about__img'/>
            <div className='section__title about__title'>
                <h2 className='section__title about__title'>
                    Veniam dolor velit consequat qui irure 
                </h2>
                <p className='about__description'>
                    Tempor fugiat ea qui eu enim mollit officia excepteur dolor fugiat velit.
                </p>
                <div className='about__details'>
                    <p className='about__details-description'>
                        <FaSquareCheck className='about__details-icon'/>
                        Fugiat ea cillum laborum laborum commodo culpa.
                    </p>
                    <p className='about__details-description'>
                        <FaSquareCheck className='about__details-icon'/>
                        Fugiat ea cillum laborum laborum commodo culpa.
                    </p>
                    <p className='about__details-description'>
                        <FaSquareCheck className='about__details-icon'/>
                        Fugiat ea cillum laborum laborum commodo culpa.
                    </p>
                    <p className='about__details-description'>
                        <FaSquareCheck className='about__details-icon'/>
                        Fugiat ea cillum laborum laborum commodo culpa.
                    </p>
                </div>
            </div>
            <a href='#' className='button--link button--flex'><FaShoppingBasket className='button__icon'/>Shop</a>
        </div>
    </section>
  )
}

export default About