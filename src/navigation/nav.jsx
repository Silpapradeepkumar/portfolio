import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navig() {
  return (
    <div>
      <div>
        <Navbar  expand="lg" >
        <Navbar.Brand href="#" ><Link className='mystyle link' to={'../front'}>SILPA PRADEEPKUMAR</Link></Navbar.Brand>
        
          <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav  className="me-auto my-2 my-lg-0"  style={{ maxHeight: '100px' }}  navbarScroll>
                <Link className='link mystyle' to='/education'>Education</Link>
                <Link className='link mystyle' to='/experience'>Experience</Link>
                <Link className='link mystyle' to='/skills'>Skills</Link>
                <Link className='link mystyle' to='/contact'>Contact</Link>
                <Link className='link mystyle' to='/projects'>Projects</Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default Navig
