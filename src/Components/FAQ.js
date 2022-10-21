import React from 'react'
import './faq.css';
import AddIcon from '@mui/icons-material/Add';

function FAQ() {
  return (
    <div className='FAQ'>
       <div className='FAQs'>
            <h1 className='Question'>Frequently Asked Questions</h1>
            <div className='Faq_container'><h3>What is Netflix? <AddIcon/></h3></div>
       </div>
        <div className='line'></div>
    </div>
  )
}

export default FAQ