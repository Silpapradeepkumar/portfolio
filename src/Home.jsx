import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './home.css';
import a from './a.jpg';
import { Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';

function Home() {
  return (
    
    <div>

      <div>
        <Navbar  expand="lg" className="bg-body-tertiary abc">
          <Navbar.Brand href="#">SILPA PRADEEPKUMAR</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav  className="me-auto my-2 my-lg-0"  style={{ maxHeight: '100px' }}  navbarScroll>
                <Button className=' mystyle' to={'./about'}>About</Button>
                <Button className=' mystyle'  to={'./education'}>Education</Button>
                <Button className=' mystyle'  to={'./experience'}>Experience</Button>
                <Button className=' mystyle'  to={'./skills'}>Skills</Button>
                <Button className=' mystyle'  to={'./contact'}>Contact</Button>
                <Button className=' mystyle'  to={'./projects'}>Projects</Button>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>

      <div className="row container-fluid "  style = {{ width: "100%",  backgroundImage:  'url("https://wallpaperaccess.com/full/3603142.jpg")'}}>
        <style>{'body { background-color: rgb(185, 147, 236); }'}</style>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className='aboutImg'>
            <div className='width'>
              <h1>About Me</h1>
              <p>Iam a skilled fullstack developer specialized in MERN. I would like to work in an organization that will give me a platform to utilize my technical skills and enrich my knowledge. Iam highly proficient in C,Java,Html,CSS and Javascript.</p>
            </div>
            <div>
              <img src={a} className='im'></img>
            </div>
          </div>
        </div>
  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
</div>
</div>

<div><About/></div>
<div ><Contact/></div>
<div ><Education/></div>
<div > <Experience/></div>



</div>

)

}

export default Home



