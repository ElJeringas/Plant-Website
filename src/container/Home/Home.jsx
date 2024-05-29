import React from 'react'
import homeImage from '../../assets/images/home.png'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import './Home.css';
const Home = () => {
  return (
    <section className='home' id='home'>
        <div className='home__container container grid'>
            <img src={homeImage} alt='home' className='home__img'/>

            <div className='home__data'>
                <h1 className='home__title'>
                    Commodo aliquip ce.
                </h1>
                <p className='home__description'>
                    Lorem aliquip ut excepteur in occaecat.
                </p>

                <a href='about' className='button button--flex'>Explore <MdKeyboardDoubleArrowDown className='button__icon' size={27}/></a>
            </div>
            <div className='home__social'>
                <span className='home__social-follow'>Follow Us</span>
                <div className='home__social-links'>
                    <a href='#' target='_blank' className='home__social-link'>
                        <FaFacebook size={20}/>
                    </a>
                    <a href='#' target='_blank' className='home__social-link'>
                        <BsInstagram size={20}/>
                    </a>
                    <a href='#' target='_blank' className='home__social-link'>
                        <BsWhatsapp size={20}/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home