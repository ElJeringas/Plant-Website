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
                    Reconecta<br/> con tu lado mas natural
                </h2>
                <p className='about__description'>
                    Mira las opeciones que tenemos para ti.
                </p>
                <div className='about__details'>
                    <p className='about__details-description'>
                        <i className='about__icon'><FaSquareCheck className='about__details-icon'/></i>
                        Decoracion de espacios.
                    </p>
                    <p className='about__details-description'>
                        <i className='about__icon'><FaSquareCheck className='about__details-icon'/></i>
                        Tips e ideas para ti.
                    </p>
                    <p className='about__details-description'>
                        <i className='about__icon'><FaSquareCheck className='about__details-icon'/></i>
                        Asesoramiento y proformas.
                    </p>
                    <p className='about__details-description'>
                        <i className='about__icon'><FaSquareCheck className='about__details-icon'/></i>
                        Plantas de todo tipo.
                    </p>
                </div>
            </div>
            <a href='#' className='button--link button--flex'><FaShoppingBasket className='button__icon'/>Shop</a>
        </div>
    </section>
  )
}

export default About