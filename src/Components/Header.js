import React from 'react'
import './header.css';

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <img src='https://i.ibb.co/r5krrdz/logo.png' alt='Netflix Logo'></img>
      </div>
      <button className='bt-1'>Sign In</button>

    </div>
  )
}

export default Header