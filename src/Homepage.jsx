import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Homepage.css';
import spk1 from './spk1.png';
import { Link, Outlet } from 'react-router-dom';
import About from './About';


function Home() {
  return (
    
    <div className="container">
      <div>
        <Navbar  expand="lg" >
          <Navbar.Brand href="#" className='spk'>SILPA PRADEEPKUMAR</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav  className="me-auto my-2 my-lg-0"  style={{ maxHeight: '100px' }}  navbarScroll>
                <Link className='link mystyle' to={'./education'}>Education</Link>
                <Link className='link mystyle' to={'./experience'}>Experience</Link>
                <Link className='link mystyle' to={'./skills'}>Skills</Link>
                <Link className='link mystyle' to={'./contact'}>Contact</Link>
                <Link className='link mystyle' to={'./projects'}>Projects</Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
      
     
      
      <div className="row maindiv">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 about">
          
              <h1>About Me</h1>
              <p>Iam a skilled fullstack developer specialized in MERN. I would like to work in an organization that will give me a platform to utilize my technical skills and enrich my knowledge. Iam highly proficient in C,Java,Html,CSS and Javascript.</p>
            </div>
            
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div>
              <img src={spk1} className='im'></img>
            </div>
        </div>
      </div>
      
</div>

)

}

export default Home



