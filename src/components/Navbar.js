import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import { Button, Nav, NavItem, NavDropdown, MenuItem, NavLink } from 'react-bootstrap';

function Navbar_Ryan(props){
    return(
        <Navbar className = "border-bottom" bg="transparetnt" expand="lg">
            <Navbar.Brand>Ryan Foshage</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <NavLink to="https://github.com/RFOSHA">
                  <img src={github_logo} alt='logo' />
                </NavLink>  
              </Nav>
            </Navbar.Collapse>
          </Navbar>
    );
}

export default Navbar_Ryan;

