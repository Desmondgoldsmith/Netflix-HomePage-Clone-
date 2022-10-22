import React from 'react';
import './header.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Header() {
  return (
    <header className='MainHeader' style={{
        backgroundPosition : "center center",
        // backgroundImage : `url("https://i.ibb.co/vXqDmnh/background.jpg")`,
        backgroundImage: `linear-gradient(rgba(2.9, 0.5, 0.5, 0.5),
                       rgba(0.8, 0.5, 0, 0.5)), url("https://i.ibb.co/vXqDmnh/background.jpg")`,
        backgroundSize: "cover",
    }}>
      <div className = 'header'>
        <img src = "https://i.ibb.co/r5krrdz/logo.png" alt='Netflix Logo'></img>
        <button>Sign In</button>
      </div>
      <div className='some_text_'>
        <h1 className='first--'>Unlimited movies, TV</h1>
      <h2 className='second--'>shows, and more.</h2>
      <h3 className='third--'>Watch anywhere. Cancel anytime.</h3>
      <p className='fourth--'>Ready to watch? Enter your email to create or restart your membership.</p>
      </div>
      <div className='text_field'>
        <input className='text_' placeholder='  Email address' required></input> <button className='but_start'>Get Started <ArrowForwardIosIcon /></button>
      </div>
      <div className='dim-low'></div>
     
      </header>
  )
}

export default Header