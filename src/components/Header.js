import React, { useRef } from 'react';
import { Link } from "react-router-dom";

function Header() {
  const menuBtnRef = useRef(null)

  const handleClick = (e) => {
    e.preventDefault();
    //закрывать меню при нажатии
    menuBtnRef.current.checked = false;
  }

  return (
    <header className='header'>
      <nav className="navbar">
      <input className="menu-btn" type="checkbox" id="menu-btn" ref={menuBtnRef} />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className='navbar-menu'>
        <li className='navbar-menu__item' onClick={handleClick}><Link to="/#about-me">Обо мне</Link></li>
        <li className='navbar-menu__item' onClick={handleClick}><Link to="/#my-work">Мои работы</Link></li>
        <li className='navbar-menu__item' onClick={handleClick}><Link to="/#contacts">Мои контакты</Link></li>
      </ul>
      </nav>
    </header>
  );
}

export default Header;
