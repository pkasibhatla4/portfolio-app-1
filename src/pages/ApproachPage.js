
import {Container, Row, Col} from 'react-bootstrap';
import {ArrowDownCircle} from 'react-bootstrap-icons'

import React from 'react';




export const ApproachPage = () => {

    return(
        <section className="Approach-Page"> 
            <div className="AP-title">
                <h1 className="Approach-Page-Title">My Approach.</h1>
                <br/>
                <h3> "Arise, awake and stop not till the goal is reached."</h3>
                <div class="vivekananda-container" >
                    <h6>- Swami Vivekananda</h6>

                </div>
                
                <p className="title-paragraph">
                    I approach everything like a video game, challenges at every level, 
                    each offering its own lessons and rewards.
                    My relentless dedication to achieving my goals defines who I am, 
                    and I view challenges as opportunities for growth and evolution.
                     True to my middle name, Kushal, which means "happy,"
                      I find joy in making others smile and engaging in meaningful conversations, 
                      believing that every person I meet contributes to the journey of life.
                 </p>
                <p className="Approach-Scroll">There's More! <ArrowDownCircle size={25} /></p>
            </div>

            <section className="rows">
                <Container className="Projects">
                    <Row className="Project-Row">
                        <Col xs={12} md={6} xl={5} className="project-approach">
                            <h1>How I approach projects</h1>
                            <h4 className="einstein-quote"> "If I had an hour to solve a problem I’d spend 55 minutes thinking about the problem and 5 minutes thinking about solutions."</h4>
                            <div class="Albie-container" >
                                <p className="Albie"> - Albert Einstein</p>
                            </div>

                            <p>
                            
    I approach each project as a complex problem to be solved, meticulously gathering and analyzing all pertinent information. Leveraging both intuition and logical reasoning, I craft the most efficient and effective solutions. Finally, with precision and promptness, I bring all the components together to achieve a seamless and successful execution.
                            </p>
                        </Col>
                        <Col xs={12} md={6} xl={5} className="Tech-approach">
                            <h1>How I approach Technology.</h1>
                            <h4 className="hopper-quote">"The most damaging phrase in the language is, ‘We’ve always done it this way.’"</h4>
                            <div class="hopper-container">
                                <p  > - Grace Hopper</p>
                            </div>
                            <p>I approach technology with a commitment to continuous learning, driven by a lifelong fascination with how things work. As a child, I disassembled toys to understand them, a curiosity that now fuels my passion for coding. By immersing myself in new languages and technologies, I gain deep insights into their workings and refine them to solve complex problems efficiently. This hands-on approach keeps me at the cutting edge of technological advancements and innovation.</p>
                            
                        </Col>
                    </Row>
                </Container>
                

                
            </section>

        </section>
        
    )
}

export default ApproachPage;