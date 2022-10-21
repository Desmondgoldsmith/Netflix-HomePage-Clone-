import React,{ Component } from 'react'
import './faq.css';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
class FAQ extends Component {
    state = {
        divcontent:false,
    }

    render(){
    var Handlechange = e =>{
        this.setState({divcontent:!this.state.divcontent});
    }
    const x = this.state.divcontent;
  return (
    <div className='FAQ'>
       <div className='FAQs' onClick={() => this.handleClick()}>
            <h1 className='Question'>Frequently Asked Questions</h1>
            <div className='Faq_container'>
            <h3 onClick={Handlechange}>What is Netflix? {x?<CloseIcon/>:<AddIcon/>} </h3>
            {x && (<h4 className='details'>Netflix is a streaming service that offers a wide variety 
            of award-winning TV shows, movies, anime, documentaries, and 
            more on thousands of internet-connected devices.<br/><br/>
           You can watch as much as you want, whenever you want 
            without a single commercial – all for one low monthly price. 
            There's always something new to discover and new TV shows 
            and movies are added every week!</h4>)}
            </div>
            <div className='Faq_container'>
            <h3>What is Netflix? <AddIcon/></h3>
            <h4 className='details'>Netflix is a streaming service that offers a wide variety 
            of award-winning TV shows, movies, anime, documentaries, and 
            more on thousands of internet-connected devices.<br/><br/>
           You can watch as much as you want, whenever you want 
            without a single commercial – all for one low monthly price. 
            There's always something new to discover and new TV shows 
            and movies are added every week!</h4>
            </div>
       </div>
        <div className='line'></div>
    </div>
  )
}
}

export default FAQ