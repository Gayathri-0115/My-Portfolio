import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useRef } from 'react';

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }
  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo"><h2>Portfolio</h2></div>
        <i className="fa-solid fa-bars mob-open" onClick={openMenu}></i>
        <ul className="nav-menu" ref={menuRef}>
          <i className="fa-solid fa-xmark mob-close" onClick={closeMenu}></i>
          <AnchorLink href='#home' className='anchorlink'><li>Home</li></AnchorLink>
          <AnchorLink href='#about' className='anchorlink' offset={50}> <li>About</li></AnchorLink>
          <AnchorLink href='#project' className='anchorlink' offset={50}><li>Projects</li></AnchorLink>
          <AnchorLink href='#contact' className='anchorlink' offset={50}><li>Contact</li></AnchorLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar