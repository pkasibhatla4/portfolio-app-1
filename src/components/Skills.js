import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Row, Col } from "react-bootstrap";
import colorSharp from '../assets/img/color-sharp.png';

import frontend from '../assets/Code-Monitor-1--Streamline-Flex.png';
import backend from '../assets/Usb-Port--Streamline-Flex.png';
import leadership from '../assets/Politics-Speech--Streamline-Flex.png';
import artint from '../assets/Ai-Scanner-Robot--Streamline-Flex.png';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 465, min: 0 },
          items: 1
        }
      };


      return(
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-box">

                        <br/>
                        <Carousel responsive = {responsive} infinite = {true} className ="Skills-slider">
                            <div className="item">
                                <img src={frontend} className="icons" alt="icon"/>
                                <h3>Front-End </h3>
                                <p>Technical Languages: Javascript, HTML, CSS, React, React-Native</p>
                                <br/>
                                <p> My creativity along with my user-centric design allows me to leverage my knowledge of Javascript, HTML and CSS to build captivating and engaging applications</p>
                                
                            </div>
                            <div className="item">
                                <img src={backend} className="icons" alt="icon"/>
                                <h3>Back-End </h3>
                                <p>Technical Languages: Python, Java, SQL, Django, Postman </p>
                                <br/>
                                <p> My out of the box critical thinking skills along with extensive experience in Python, Java, Django and SQL enable me to develop simple and efficient back end systems.  </p>
                                
                            </div>
                            <div className="item">  
                              <img src={artint} className="icons" alt="icon"/>
                                <h3>AI Architect</h3>
                                <p> AI Tools: Tensorflow, OpenAI Gym, Pytorch, HuggingFace </p>
                                <br/>
                                <p> I have a strong foundation of AI, Deep Learning and computer visions and its concepts through coursework, Artificial Intelligence Society and personal projects.  </p>
                                
                            </div>
                            <div className="item">
                              <img src={leadership} className="icons" alt="icon"/>
                                <h3>Leadership</h3>
                                <p>Leadership Skills: Prioritization, Understanding team dynamics, Approachable Character, Ability to take Initiative</p>
                                <br/>
                                <p>My advanced people skills enhance my understanding of team dynamics, while my strong project vision and proactive initiative enable me to lead with confidence and effectiveness.</p>
                                
                            </div>

                            

                            
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className = "background-image-left" src ={colorSharp} alt="backgroundimgs"/>
        </section>
      )
}