import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/pictureofme.png';
import { useState, useEffect } from 'react';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const toRotate = ['Full Stack Developer', 'Chess Player', 'Athlete', 'AI Architect','Problem Solver'];
    const [text, setText] = useState('');
    const period = 1000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }
    };
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text, delta]);

   


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagLine">Welcome to my Portfolio</span>
                        <h1>{'Hi, I\'m Pranav: '} <span className="wrap">{text}</span></h1>
                        <p>
                                I design and develop creative, efficient
                                and detail-oriented applications and products.
                                From working on simple real estate webscraping to building models using Deep Reinforcement Learning (DRL), my passion for big ideas drives me to crafting creative solutions 
                                    and pushing the barriers of technology. </p>
                        <a className="connect_arrow" href= 'https://www.linkedin.com/in/pranavkkasibhatla/'>Let's Connect <ArrowRightCircle size={25} /></ a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg}className="personal_image" alt="Header_Image"  />
                    </Col>

                </Row>
                <h6 className="Scroll-text">Theres More! ↓ </h6>
            </Container>
            
        </section>
    );
};