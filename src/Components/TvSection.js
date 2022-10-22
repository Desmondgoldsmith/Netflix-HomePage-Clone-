import React from 'react'
import './tvSection.css';

function TvSection() {
  return (
    <div className='TvSection'>
     <div className='line'></div>
     <div className='details'>
     <div className='title first--'>
     <h1 className='main'>Enjoy on your TV.</h1>
    <p className='second--'>Watch on Smart TVs, Playstation, Xbox,</p>
    <p className='second--'> Chromecast, Apple TV, Blu-ray players, and </p>
    <p className='second--'> more.</p>
    
    </div>
    <img className='side_image' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt=''></img>
     </div>
     <div className='line'></div>
    </div>
  )
}

export default TvSection