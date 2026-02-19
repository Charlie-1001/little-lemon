import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import style from './Navigation.module.css';
import logo from '../assets/Logo.svg';
import hamburgerIcon from '../assets/hamburger-menu.svg';

function Navigation() {

  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(prev => !prev);
  }

  const Logo = () => {
    return <img className={style.logo} src={logo} alt='The little lemon restaurant logo' />;
  }

  const Nav = () => {
    return (
      <nav className={style.navLinks}>
        <ul className={`section-categories ${isOpen ? style.show : ""}`} >
          <li><NavLink to="/" onClick={isOpen && toggleMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={isOpen && toggleMenu}>About</NavLink></li>
          <li><NavLink to="/menu" onClick={isOpen && toggleMenu}>Menu</NavLink></li>
          <li><NavLink to="/booking" onClick={isOpen && toggleMenu}>Reservations</NavLink></li>
          <li><NavLink to="/order-online" onClick={isOpen && toggleMenu}>Order Online</NavLink></li>
          <li><NavLink to="/login" onClick={isOpen && toggleMenu}>Login</NavLink></li>
        </ul>
        <button className={style.hamburgerIcon} onClick={toggleMenu}>
          <img src={hamburgerIcon} alt='the hamburger menu'/>
        </button>
      </nav>
    )
  }

  return (
    <header className={style.header}>
      <Logo></Logo>
      <Nav></Nav>
    </header>
  )
}

export default Navigation;
