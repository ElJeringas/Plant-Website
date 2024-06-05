import React from 'react';
import { GiMonsteraLeaf } from "react-icons/gi";
import { IoIosSend } from "react-icons/io";
import './Footer.css';
import { FaFacebook } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='footer section footer__section'>
        <div className='footer__container container grid'>
            <div className='footer__content'>
                <i className='footer__logo-icon'><GiMonsteraLeaf size={22}/> An Anasha</i>
                <h3 className='footer__title'>
                    Suscribete<br/>para conocer mas
                </h3>
                <div className='footer__subscribe'>
                    <input type='email' placeholder='Your email' className='footer__input'/>
                    <button className='button button--flex footer__button'>
                        Suscribirse
                        <i className='button__icon'><IoIosSend/></i>
                    </button>
                </div>
            </div>
            <div className='footer__content'>
                <h3 className='footer__title'>Estamos ubicados en</h3>
                <ul className='footer__data'>
                    <li className='footer__information'>93-58 Manuel Vivanco & Pedro Falconi</li>
                    <li className='footer__information'>Loja - Ecuador</li>
                </ul>
            </div>
{/*             <div className='footer__content'>
                <h3 className='footer__title'>Contacos</h3>
                <ul className='footer__data'>
                    <li className='footer__information'>+5939778889</li>
                    <div className='footer__social'>
                        <a href='' className='footer__social-link'>
                            <i className='footer__icon'><FaFacebook size={20}/></i>
                        </a>
                        <a href='' className='footer__social-link'>
                            <i className='footer__icon'><ImInstagram size={20}/></i>
                        </a>
                        <a href='' className='footer__social-link'>
                            <i className='footer__icon'><BsWhatsapp size={20}/></i>
                        </a>
                    </div>
                </ul>
            </div> */}
        </div>
        <p className='footer__copy'>©️ 2024 Digital Canvas</p>
    </footer>
  )
}

export default Footer