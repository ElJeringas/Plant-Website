import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GiThreeLeaves } from "react-icons/gi";
import { IoIosMenu } from "react-icons/io";
import './NavBar.css'
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
    const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className='header' id='header'>
        <nav className='nav container'>
            <a href='#home' className='nav__logo'>
                <i className='nav__logo-icon'><GiThreeLeaves /> An Anasha</i>
            </a>
            <div className='nav__toggle' id='nav-toggle'>
                <i className='ri-menu-line' onClick={()=>setToggleMenu(true)}><IoIosMenu fontSize={27}/></i>
            </div>
                <div className={`nav__menu  ${toggleMenu ? 'show-menu' : ''}`} id='nav-menu'>
                <ul className='nav__list'>
                    <li>
                        <a href='#home' className='nav__link' onClick={() => setToggleMenu(false)}>Home</a>
                    </li>
                    <li>
                        <a href='#about' className='nav__link' onClick={() => setToggleMenu(false)}>Acerca de Nosotros</a>
                    </li>
                    <li>
                        <a href='#products' className='nav__link' onClick={() => setToggleMenu(false)}>Productos</a>
                    </li>
                    <li>
                        <a href='#faqs' className='nav__link' onClick={() => setToggleMenu(false)}>FAQs</a>
                    </li>
                    <li>
                        <a href='#contact' className='nav__link' onClick={() => setToggleMenu(false)}>Contactos</a>
                    </li>
                </ul>
                <div className='nav__close' id='nav-close'>
                    <i className='ri-close-line' onClick={() => setToggleMenu(false)}><IoIosCloseCircleOutline fontSize={27}/></i>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default NavBar