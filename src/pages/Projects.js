import React , {useState} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import DrlLogo from '../assets/drl-logo.png';
import TaskMatchLogo from '../assets/task-match.png';
import presentationIcon from '../assets/presentation-icon.png';
import pdfPresentation from '../assets/drlpres.pdf';
import taskMatchPresentation from '../assets/taskMatchPresentation.pdf'
import github from '../assets/github-mark.png';




export const Projects = () =>{
    
    const [showDiv, setShowDiv] = useState(false);

    const handleClick = () => {
        setShowDiv(!showDiv);
    }
    
    return(

        <section className="Project-Page">
            <div className="project-title">
                <h1>Projects</h1>
                <p>Here are some of the projects I've worked on!</p>
                <br/>
            </div>

            <section className="Project-Row">
                <Container className="Projects-Container">
                    <Row className="AI-row" onClick = {handleClick}>
                        <Col xs={12} md={6} xl={5} className="AI-project">
                            <h2>Stock Trading bot</h2>
                            <br/>
                            <p>Created custom environment using specific stock metrics using OpenAI Gym develoment toolkit. 
                            Trained Deep Reinforcement Learning agent with historic Stock data from YahooFinance API to predict future behavior of given stock. </p>
                            <br/>
                            <h4>Technlogies used: </h4>
                            <br/>
                            <p>Python, Tensorflow, Stable-baseline, gym, Torch, Gast.</p>
                            <a href = {pdfPresentation}>
                                <img src = {presentationIcon} className="presentation-icon" alt="presicon"/>
                            </a>
                            <a href = "https://github.com/pkasibhatla4/DRL-Trading-Bot/tree/main/Trading-Bot-RL-main">
                                <img src = {github} className="github-icon" alt="githubicon"/>
                            </a>
                        </Col>
                        <img src={DrlLogo} className="DRL-Logo" alt="drllogo"/>
                    </Row>
                    <Row className="Task-Match-row">
                        <Col xs={12} md={6} xl={7} className="Task-Match">
                            <h2>Task-Match</h2>
                            <br/>
                            <p>Ever run into a task you don't want to do?  Outsource it!  Plan your days to perfection using TaskMatch's in built calander feature along with the ability to outsource tasks to willing contractors.</p>
                            <br/>
                            <h4>Technlogies used: </h4>
                            <br/>
                            <p>DJango, React.js, Python, JavaScript, Figma, Postman. </p>

                            <a href = {taskMatchPresentation}>
                                <img src = {presentationIcon} className="presentation-icon" alt="presicon"/>
                            </a>
                            <a href = "https://github.com/pkasibhatla4/task-match">
                                <img src = {github} className="github-icon" alt="giticon"/>
                            </a>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={TaskMatchLogo} className="Task-Match-Logo" alt="taskmatchlogo"/>
                        </Col>
                        
                    </Row>
                    <Row className="Portfolio-row"> 
                        <Col xs={12} md={6} xl={7} className="portfolio-app">
                            <h2>Portfolio Website</h2>
                            <br/>
                            <p>A website made to showcase me! From my various projects, to my hobbies, and my approach to life, this website is designed to evolve over time and create a comprehensive place to find out all things related to PK!</p>
                            <br/>
                            <h4>Technlogies used: </h4>
                            <br/>
                            <p>React, React-Bootstrap, JavaScript, CSS. </p>
                            <a href = "https://github.com/pkasibhatla4/portfolio-app-1">
                                <img src = {github} className="github-icon" alt="giticon"/>
                            </a>
                        </Col>
                        
                    </Row>
                </Container>
            </section>
        </section>

    )
}

export default Projects;