import React from 'react'
import './Front.css'
import { Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiLogoGithub } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import Experience from './experience/Experience';
import Education from './education/Education';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import Projects from './projects/Projects';
import About from './About/About';
import './design.css';

function Front() {
  return (
      <div>
      <div>
        <Navbar  expand="lg" className='navv1' >
        <Navbar.Brand  className='sil ' >SPK</Navbar.Brand>
           <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav  className="me-auto my-2 my-lg-0 color"  style={{ maxHeight: '100px' }}  navbarScroll>
                <Link className='link mystyle' to={'../education'}>Education</Link>
                <Link className='link mystyle' to={'../experience'}>Experience</Link>
                <Link className='link mystyle' to={'../skills'}>Skills</Link>
                <Link className='link mystyle' to={'../contact'}>Contact</Link>
                <Link className='link mystyle' to={'../projects'}>Projects</Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
      <div className='refdiv bckgnd'>
        <div className="ac">
          <div className='linkdiv'>
          <a  href="https://www.linkedin.com/in/silpa-pradeepkumar-491100102/"><AiFillLinkedin size={40}/></a>
          </div><div className='linkdiv'>
          <a  href="https://github.com/Silpapradeepkumar"> <BiLogoGithub size={40}/></a>
          </div>
          <div className='linkdiv'>
          <a href = "mailto: spk4silpa@gmail.com"><AiOutlineMail size={40}/></a>
          </div>
        </div>
        <div className='frontpage'>
          <h1> HI I'M</h1>
          <Link className='namestyle animate-charcter' to={'../About'} ><h1 >SILPA PRADEEPKUMAR</h1></Link>
          <h2>MERN FULLSTACK DEVELOPER</h2>
          <Outlet/>
        </div>
      </div>
      <div>
      <div className='divss'><Education/></div>
      <div className='divss'><Experience/></div>
      <div className='divss'><Skills/></div>
      <div className='divss'><Projects/></div>
      <div className='divss'><Contact/></div>
      </div>
    </div>
  )
}
export default Front
