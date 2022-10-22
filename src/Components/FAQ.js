import React,{ Component } from 'react'
import './faq.css';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

class FAQ extends Component {
    state = {
        divcontent:false,
        divcontent1:false,
        divcontent2:false,
        divcontent3:false,
        divcontent4:false,
        divcontent5:false,
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
    var Handlechange3 = e =>{
        this.setState({divcontent3:!this.state.divcontent3});
    }
    var Handlechange4 = e =>{
        this.setState({divcontent4:!this.state.divcontent4});
    }
    var Handlechange5 = e =>{
        this.setState({divcontent5:!this.state.divcontent5});
    }
    const x = this.state.divcontent;
    const y = this.state.divcontent1;
    const z = this.state.divcontent2;
    const a = this.state.divcontent3;
    const b = this.state.divcontent4;
    const c = this.state.divcontent5;
  return (
    <div className='FAQ'>
       <div className='FAQs' onClick={() => this.handleClick()}>
            <h1 className='Question'>Frequently Asked Questions</h1>
            <div className='Faq_container'>
            <h3 className = 'W_A' onClick={Handlechange}>What is Netflix? {x?<CloseIcon/>:<AddIcon/>} </h3>
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
            <div className='Faq_container'>
            <h3 onClick={Handlechange3}>How do I cancel? {a?<CloseIcon/>:<AddIcon/>}</h3>
            {a &&(<h4 className='details'>Netflix is flexible. There are no pesky contracts and no 
            commitments. You can easily cancel your account online in two 
            clicks. There are no cancellation fees – start or stop your
             account anytime. 
            </h4>)}
            </div>
            <div className='Faq_container'>
            <h3 onClick={Handlechange4}>What can I watch on Netflix? {b?<CloseIcon/>:<AddIcon/>}</h3>
            {b &&(<h4 className='details'>Netflix has an extensive library of feature films, documentaries,
             TV shows, anime, award-winning Netflix originals, and more.
              Watch as much as you want, anytime you want.
             account anytime. 
            </h4>)}
            </div>
            <div className='Faq_container'>
            <h3 onClick={Handlechange5}>Is Netflix good for kids?{c?<CloseIcon/>:<AddIcon/>}</h3>
            {c &&(<h4 className='details'>The Netflix Kids experience is included in your membership to 
            give parents control while kids enjoy family-friendly TV shows
             and movies in their own space.<br/><br/>
             Kids profiles come with PIN-protected parental controls that let 
             you restrict the maturity rating of content kids can watch and 
             block specific titles you don’t want kids to see.
            </h4>)}
            </div>
            <div className='last'>
                <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
            </div>
            <div className='text_field'>
        <input placeholder='  Email address' required></input> <button className='but_start'>Get Started <ArrowForwardIosIcon /></button>
      </div>
       </div>
        <div className='line'></div>
    </div>
  )
}
}

export default FAQ