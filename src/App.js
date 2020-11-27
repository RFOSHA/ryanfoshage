import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import { Button, Nav, NavItem, NavDropdown, MenuItem, NavLink } from 'react-bootstrap';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';
import FFLWebsitePage from './pages/FFLWebsitePage';
import ESPNAPIPage from './pages/ESPNAPIPage';
import YahooFinanceOptionsPage from './pages/YahooFinanceOptionsPage';
import ThisSitePage from './pages/ThisSitePage';
import BlogPage from './pages/BlogPage';
import BathRemodel from './pages/BathRemodel';
import ResumePage from './pages/ResumePage';

import github_logo from '../src/assets/images/github.png'
import linkedin_logo from '../src/assets/images/linkedin.png'

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: 'Ryan Foshage',
  //     headerLinks: [
  //       { title: 'Home', path: '/' },
  //       { title: 'Projects', path: '/projects' },
  //       { title: 'Contact', path: '/contact' }
  //     ],
  //     home: {
  //       title: 'Be Relentless',
  //       subTitle: 'Projects that make a differnce',
  //       text: 'Checkout my projects below'
  //     },
  //     about: {
  //       title: 'About Me'
  //     },
  //     contact: {
  //       title: 'Let\'s Connect'
  //     }
  //   }
  // }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparetnt" expand="lg">
            <Navbar.Brand href="/ryanfoshage">Ryan Foshage</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/blog">Blog</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <NavLink href="https://github.com/RFOSHA" target="_blank">
                  <img src={github_logo}
                    width="25"
                    height="25"
                    alt='logo' />
                </NavLink>
                <NavLink href="https://github.com/RFOSHA" target="_blank">
                  <img src={linkedin_logo}
                    width="25"
                    height="25"
                    alt='logo' />
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/ryanfoshage" exact render={() => <HomePage />} />
          <Route path="/projects" exact render={() => <ProjectPage />} />
          <Route path="/projects/fflwebsite" exact render={() => <FFLWebsitePage />} />
          <Route path="/projects/espnapi" exact render={() => <ESPNAPIPage />} />
          <Route path="/projects/yahoofinanceoptions" exact render={() => <YahooFinanceOptionsPage />} />
          <Route path="/projects/thissite" exact render={() => <ThisSitePage />} />
          <Route path="/blog" exact render={() => <BlogPage />} />
          <Route path="/blog/bathremodel" exact render={() => <BathRemodel />} />
          <Route path="/resume" exact render={() => <ResumePage />} />
          <Route path="/contact" exact render={() => <ContactPage />} />

          <Footer />

        </Container>
      </Router>

    );
  }
}


export default App;


{/* <Route path="/" exact render={() => <HomePage title={this.state.home.title}
  subTitle={this.state.home.subTitle}
  text={this.state.home.text} />} />
<Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
<Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} /> */}
