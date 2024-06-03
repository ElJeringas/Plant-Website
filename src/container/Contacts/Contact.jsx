import React from 'react';
import './Contant.css';
import { BsSend, BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import { BiLocationPlus } from 'react-icons/bi';
const Contact = () => {
  return (
    <section className='contact section container' id='contact'>
        <div className='contact__container grid'>
            <div className='contact__box'>
                <h2 className='section__title'>Ullamco minim ullamco veniam reprehenderit <br/>qui cillum deserunt sunt<br/> ullamco sunt proident.</h2>
                <div className='contact__data'>
                    <div className='contact__information'>
                        <h3 className='contact__subtitle'>Call us for support</h3>
                        <span className='contact__description'><i className='contact__icon'><BsWhatsapp size={22}/></i> 098898989</span>
                    </div>
                    <div className='contact__information'>
                        <h3 className='contact__subtitle'>Send us email</h3>
                        <span className='contact__description'><i className='contact__icon'><MdEmail size={22}/></i> anansha@example.com</span>
                    </div>
                    <div className='contact__information'>
                        <h3 className='contact__subtitle'>Follow us</h3>
                        <span className='contact__description'><i className='contact__icon'><FaFacebook size={22}/></i> An Anasha</span>
                    </div>
                    <div className='contact__information'>
                        <h3 className='contact__subtitle'>We are located in</h3>
                        <span className='contact__description'><i className='contact__icon'><BiLocationPlus size={22}/></i> Loja, Ecuador</span>
                    </div>
                </div>
            </div>

            <form className='contact__form'>
                <div className='contact__inputs'>
                    <div className='contact__content'>
                        <input type='email' placeholder='' className='contact__input'></input>
                        <label className='contact__label'>Email</label>
                    </div>
                    <div className='contact__content'>
                        <input type='email' placeholder='' className='contact__input'></input>
                        <label className='contact__label'>Name</label>
                    </div>
                    <div className='contact__content'>
                        <input type='email' placeholder='' className='contact__input'></input>
                        <label className='contact__label'>Message</label>
                    </div>
                </div>

                <button className='button button--flex'>Send Message <BsSend /></button>
            </form>
        </div>
    </section>
  )
}

export default Contact