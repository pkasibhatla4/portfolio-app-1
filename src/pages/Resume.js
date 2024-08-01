import cognizantLogo from '../assets/cognizant-logo.jpeg';
import ekalLogo from '../assets/ekal-logo.png';
import aisLogo from '../assets/ais-logo.png';
import upworkLogo from '../assets/upwork-logo.png';
import {Container, Row, Col} from 'react-bootstrap';
import resumeImage from '../assets/resume-picture.png';
import myResume from '../assets/Pranav_Kasibhatla_Resume.pdf';

export const Resume = () => {

    return(
        <div className = "resume-page">

            <Container className="resume-heading">
                <Row className="resume-row">
                    <Col xs={12} md={6} xl={5} className = "resume-hero">
                        <h1> My Experiences </h1>
                        <p>
                            Throughout my young career as a software developer, I have had the opportunity to work with some amazing companies and organizations. Here are some of the experiences I have had.
                        </p>

                    </Col>
                    <Col xs={12} md={6} xl={5} className="resume-col">
                        <a href = {myResume}>
                            <img src={resumeImage} className="resume-image" alt ="" />
                            <p className="resume-text"> Click to Download Resume!</p>
                        </a>
                       
                    </Col>
                </Row>
            </Container>
            <div className = "timeline" >
                
                <div className = "resume-container left-container">
                    <img src = {cognizantLogo} className="resume-logo" alt="cognizant-logo"/>
                    <br/>
                    <div className="resume-textbox">
                        <small> June 2024- Aug 2024</small>
                        <h2>Generative AI Extern</h2>
                        <h4>Cognizant</h4>
                        <p>
                            <br/>
                            Developed an image classification model with PyTorch, reducing processing time by 45% and improving efficiency through the integration of VGG, AlexNet, and advanced tuning techniques.
                        </p>

                        <span className="left-container-arrow"></span>
                    </div>               
                </div>
                <div className = "resume-container left-container">
                    
                    <div className="resume-textbox">
                        <h3>Project</h3>
                        <small> Dec 2023- May 2024</small>
                        <h4>Taskmatch</h4>
                        <p>
                            <br/>
                            Task Management Application with outsourcing.
                        </p>
                        <span className="left-container-arrow"></span>
                    </div>               
                </div>
                <div className = "resume-container right-container">
                    
                    <img src={ekalLogo} className="ekal-logo" alt="ekallogo" />
                    <br/>
                    <div className="resume-textbox">
                        <small> June 2023- Aug 2023</small>
                        <h2>Technology and Automation Intern</h2>
                        <h4>Ekal Vidyalaya</h4>
                        <br/>
                        <p>
                        Generated 10-year linear regression models to forecast donor engagement for 8 USA chapters and developed an API to automate donation consolidation into DonorPerfect, streamlining CRM processes. Additionally, I programmed matching software that reduced transaction processing times by 30% and automated manual entry using PyTesseract AI. My oversight of tech systems and donation collection contributed to raising $500,000 for schools in rural India.
                        </p>
                        <span className="right-container-arrow"></span>
                    </div>               
                </div>
                <div className = "resume-container left-container">
                    
                    <br/>
                    <div className="resume-textbox">
                        <h3>Project</h3>
                        <small> Aug 2022- Dec 2022</small>
                        <h4>Stock trading bot </h4>
                        <p>
                            <br/>
                            Deep reinforcement learning stock trading bot.
                        </p>
                        <span className="left-container-arrow"></span>
                    </div>               
                </div>
                <div className = "resume-container left-container">
                    <img src={aisLogo} className="resume-logo" alt= "ais-logo"/>
                    <div className="resume-textbox">
                        <small> Aug 2022- Dec 2023</small>
                        <h2>Machine Learning Software Developer </h2>
                        <h4>Artificial Intelligence Society (AIS)</h4>
                        <br/>
                        <p>
                        Implemented a policy-based deep reinforcement learning model to forecast stock market trends, achieving a 125% ROI. Deployed the application to the cloud using AWS SageMaker, reducing model runtime by 55%. Presented the project to 50 AIS members and 3 AWS representatives to generate interest in stocks and demonstrate AI capabilities.







                        </p>
                        <span className="left-container-arrow"></span>
                    </div>               
                </div>
                
                
                <div className = "resume-container right-container">
                    
                    <img src={upworkLogo} className="resume-logo" alt ="upwork-logo"/>
                    <br/>
                    <div className="resume-textbox">
                        <small> Aug 2021- Dec 2022</small>
                        <h2>Freelance Data Engineer</h2>
                        <h4>Upwork</h4>
                        
                        <br/>
                        <p>
                            Utilized the BS4 Python library to extract data from Zillow and Tires USA, generating monthly reports and real-time real estate valuation trends. Programmed an automated bot to bypass CAPTCHA and human verification, ensuring seamless data extraction. Additionally, developed an advanced algorithm that dynamically suggests pricing strategies based on market fluctuations for Tires USA.
                        </p>
                        <span className="right-container-arrow"></span>
                    </div>               
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Resume;