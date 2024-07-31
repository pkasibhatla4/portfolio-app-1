import {Container,Row,Col,Nav} from 'react-bootstrap';
import {Link}from "react-router-dom";
import software_dev from '../assets/img/software_development.png'
import infoIcon from '../assets/fun-fact.png';
import {useState, useEffect} from 'react';



export const Approach = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"  // for smooth scrolling
        });
      };
    return(
       <section className = "Approach">
        
            <Container>
                <div class="fun-fact-container" data-tooltip="Fun Fact, I resonate heavily with this clip art.">
                    <img class="fun-fact-icon" src={infoIcon} alt="Fun Fact Icon"></img>
                </div>
                <Row className="Approach-row">
                    
                    <Col xs={12} md={6} xl={5} className="work-image">
                        <img src={software_dev} className="software-development"/>
                    </Col>
                    <Col xs={12} md={6} xl={7} className="r2">
                        <h1 className="Approach-title">Lets Work Together.</h1>
                        <p className = "intro">As a Computer Science student at the University of Dallas, ive discovered my passion for intuitive development and building meaningful products. 
                        I help awesome people build ambitious yet accessible projects - the wilder, the better.</p>
                        
                        <Link to="/resume">
                            <button class= "Approach-button" onClick = {scrollToTop}> My Resume </button>
                        </Link>
                        <Link to="/projects">
                            <button class= "Project-button" onClick = {scrollToTop}> My Projects </button>
                        </Link>
                    </Col>

                    
                    
                </Row>
            </Container>
       </section>
    )
}