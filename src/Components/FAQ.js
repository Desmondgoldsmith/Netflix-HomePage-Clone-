import React,{ Component } from 'react'
import './faq.css';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
class FAQ extends Component {
    state = {
        divcontent:false,
        divcontent1:false,
        divcontent2:false,
    }

    render(){
    var Handlechange = e =>{
        this.setState({divcontent:!this.state.divcontent});
    }
    var Handlechange1 = e =>{
        this.setState({divcontent1:!this.state.divcontent1});
    }
    var Handlechange2 = e =>{
        this.setState({divcontent2:!this.state.divcontent2});
    }
    const x = this.state.divcontent;
    const y = this.state.divcontent1;
    const z = this.state.divcontent2;
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
            <h3 onClick={Handlechange1}>How much does Netflix cost? {y?<CloseIcon/>:<AddIcon/>}</h3>
            {y &&(<h4 className='details'>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or 
            streaming device, all for one fixed monthly fee. Plans range 
            from US$3.99 to US$11.99 a month. No extra costs, no
            contracts.  
            </h4>)}
            </div>
            <div className='Faq_container'>
            <h3 onClick={Handlechange2}>Where can I watch? {z?<CloseIcon/>:<AddIcon/>}</h3>
            {z &&(<h4 className='details'>Watch anywhere, anytime. Sign in with your Netflix account to 
            watch instantly on the web at netflix.com from your personal 
            computer or on any internet-connected device that offers the
            Netflix app, including smart TVs, smartphones, tablets, 
            streaming media players and game consoles. <br/><br/>
            You can also download your favorite shows with the iOS,
            Android, or Windows 10 app. Use downloads to watch while
            you're on the go and without an internet connection. Take
            Netflix with you anywhere. 
            </h4>)}
            </div>
       </div>
        <div className='line'></div>
    </div>
  )
}
}

export default FAQ