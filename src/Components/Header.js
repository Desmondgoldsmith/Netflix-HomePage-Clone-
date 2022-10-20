import React from 'react';
import './header.css';

function Header() {
  return (
    <header className='MainHeader' style={{
        backgroundPosition : "center center",
        backgroundImage : `url("https://i.ibb.co/vXqDmnh/background.jpg")`,
        backgroundSize: "cover",
    }}>
    <div className='dim'>
      <div className = 'header'>
        <img src = "https://i.ibb.co/r5krrdz/logo.png" alt='Netflix Logo'></img>
        <button>Sign In</button>
      </div>
      </div>
      <h1>Mad man</h1>
    </header>
  )
}

export default Header