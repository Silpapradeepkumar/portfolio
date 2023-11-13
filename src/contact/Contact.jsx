import React from 'react'
import './Contact.css'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import {FaSquareXTwitter} from 'react-icons/fa6';
import '../design.css';

function Contact() {
  return (
    <div  className='container newdiv bckgnd' >
      <div className='contact'> <h2>Contact Me</h2></div>
      <div className='cde'>
        
        <div className="acc">
          <a className='a1' href="https://www.linkedin.com/in/silpa-pradeepkumar-491100102/"><AiFillLinkedin size={60}/></a>
          <a className='a1' href="https://github.com/Silpapradeepkumar"> <AiFillGithub size={60}/></a>
          <a className='a1' href='https://twitter.com/spk_silpa'><FaSquareXTwitter size={60}/></a>
        </div>
      </div>
    
    </div>
  )
}

export default Contact
