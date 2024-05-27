import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <header className='header' id='header'>
        <nav className='nav container'>
            <a href='#' className='nav__logo'>
                <i className='nav__logo-icon'>An Anasha</i>
            </a>
            <div className='mav__menu' id='nav-menu'>
                <ul className='nav__item'>
                    <li>
                        <a href='#' className='nav__link'>Home</a>
                    </li>
                    <li>
                        <a href='#' className='nav__link'>About</a>
                    </li>
                    <li>
                        <a href='#' className='nav__link'>Products</a>
                    </li>
                    <li>
                        <a href='#' className='nav__link'>FAQs</a>
                    </li>
                    <li>
                        <a href='#' className='nav__link'>Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default NavBar