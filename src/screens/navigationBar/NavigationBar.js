import React from 'react'
import './navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { navigationLinks } from '../../helpers/navigationLinks' 
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'

function createLinks(){
    return navigationLinks.map((e, idx) => (
        <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
    ))
}

function NavigationBar() {
  return (
    <div id="home">
      <Navbar className="navigation_container" style={{ zIndex: '2', position: 'fixed', top: '0', width: '100%'}} collapseOnSelect expand="md">
      <Navbar.Brand style={{marginLeft: '1rem'}} href="#home">Brett | Bucsak</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <NavbarCollapse style={{justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none'}}>
          <Nav className="links" style={{margin: '0 1rem'}}>
      {createLinks()}   
          </Nav>
      </NavbarCollapse>  
      </Navbar> 
    </div>
  )
}

export default NavigationBar
