import{ Navbar, Container, Nav} from 'react-bootstrap';
import {useState} from 'react';
import pklogo from '../assets/pk-logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';

import navIcon3 from '../assets/img/nav-icon3.svg';
import { Link } from 'react-router-dom';
import github from '../assets/github-mark-white.png';

import togleicon from '../assets/Crop-Selection--Streamline-Core.svg';
export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');


    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className="NavBar-body">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className = "pk-logo" src={pklogo} alt="pklogo"></img>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toogler-icon">
                        <img src={togleicon} alt="togleicon"/>
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" 
                            className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                            onClick = {() => {
                                onUpdateActiveLink('home');
                                window.scrollTo({top: 0, behavior: 'smooth'});
                            }}>Home
                        </Nav.Link>
                        
                        <Nav.Link as={Link} to="/resume" 
                            className = {activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'}
                            onClick = {() => onUpdateActiveLink('resume')}>Resume
                        </Nav.Link> 

                        <Nav.Link as={Link} to="/projects" 
                            className = {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick = {() => onUpdateActiveLink('projects')}>Projects
                        </Nav.Link> 


                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/pranavkkasibhatla/"><img src={navIcon1} alt="linkedin-icon"/></a>
                            <a href="https://github.com/pkasibhatla4"><img src={github} alt="github-icon"/></a>
                            <a href="https://www.instagram.com/pkasibhatla4/"><img src={navIcon3} alt="insta-icon"/></a>
                        </div>
                    </span>

                    <button className="vvd"  onClick={() => window.location.href='mailto:pkasibhatla4@gmail.com'}> 
                    <span>Contact me!</span></button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}