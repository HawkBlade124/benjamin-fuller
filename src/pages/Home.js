import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons';
import electracom  from "../images/electracomsupply.jpg";

import lindco  from "../images/lindco.jpg";
import me from "../images/me.webp";
import demosite from "../images/demosite5.jpg";

const Home = () => {
    return <>
        <section className='homeSection d-flex flex-column align-items-center'>
            <h1 id="homePageh1">Hi there! I am Ben Fuller</h1>
            <h2 id="homePageh2">I am a FrontEnd Developer</h2>      
            <div className='d-flex flex-column align-items-center'>
            <img id="mainPicture" className='w-100' src={me} />
                <p id="mainParagraph" className='paragraphText'>I am from Orem, Utah and have been developing websites for 4 years. I focus on mainly front-end technologies such as React, HTML, CSS, jQuery, React and Javascript. I have been an web developer for a company that has many clients. I can do the same for you.</p>
                
            </div>
            <div id="buttonSet" className='d-flex flex-row align-items-center justify-content-between'>
            <a href="#work" className='homeButton'>See My Portfolio</a> 
            <p className="paragraphText">or </p><a id="skillsButton" href="#skillSet" className='homeButton'>See my skill set</a>
            </div>
        </section>
        <section className='homeSection d-flex flex-column align-items-center'>
            <div id="work"></div>
            <h2>Some of my Projects</h2>
            <p className='paragraphText'>The company I work for deals with many clients. There are three types of clients that I create and maintain websites for: Fullsuite, Integration and Implimentation. I will explain more about the process of each site in great detail on my <Link to="/projects">Projects Page</Link>. But for now, lets take a look at the featured projects that I have built: </p>
            <div id='galleryWrap' className='d-flex flex-row justify-content-center flex-wrap'>
                <Link className="portfolioLink" to="/Projects">
                    <img className='portfolioImg' src={electracom} alt="electracom supply" />
                    <p className="imageCaption">Electracom Supply</p>
                </Link>
                <Link className="portfolioLink" to="/Projects">
                    <img className='portfolioImg' src={demosite} alt="Buyrite" />
                    <p className="imageCaption">Demo Site 5</p>
                </Link>
                <Link className="portfolioLink" to="/Projects">
                    <img className='portfolioImg' src={lindco} alt="Lindco" />
                    <p className="imageCaption">Lindco</p>
                </Link> 

            </div>
            <div className='d-flex flex-column align-items-center'>
                <p className='paragraphText'>I have a lot more where that came from. </p>
                <Link to="/Projects" id="workButton" className='homeButton'>See More of my Work</Link>                
            </div>

        </section>
        <section id="lastSection" className='homeSection d-flex flex-column align-items-center'>
            <div id="skillSet"></div>
            <h2>Some of my Skills</h2>
            <p className='paragraphText'>
                I have a variety of skills and knowledge of certain tools that help me accomplish my work on the internet. Such as <a href="https://www.youtube.com/watch?v=XsiiIa6bs9I" target="_blank">Nunchuck Skills, Bow Hunting Skills, Computer Hacking Skills</a>...just kidding. Here is the real list:
            </p>
                      
            <div id="skillColSection" className='d-flex flex-row justify-content-between'>
                    <div className='skillCol d-flex flex-column align-items-center'>
                        <h2><FontAwesomeIcon icon={faCode}/> &nbsp;Frontend</h2>
                        <ul className='d-flex flex-column'>
                            <li>ReactJS</li>
                            <li>Bootstrap</li>
                            <li>Wordpress</li>
                            <li>SCSS</li>
                        </ul>
                    </div>
                    <div className='skillCol d-flex flex-column align-items-center'>
                        <h2><FontAwesomeIcon icon={ faNodeJs }/> &nbsp; Backend</h2>
                        <ul className='d-flex flex-column'>
                            <li>PHP</li>
                            <li>MySQL</li>
                            <li>NodeJS</li>
                            <li>Java</li>
                        </ul>
                    </div>
                    <div className='skillCol d-flex flex-column align-items-center'>
                        <h2><FontAwesomeIcon icon={ faComputer }/> &nbsp;Software</h2>
                        <ul className='d-flex flex-column'>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe XD</li>
                            <li>Visual Studio Code</li>
                        </ul>
                    </div>
                    <div className='skillCol d-flex flex-column align-items-center'>
                        <h2><FontAwesomeIcon icon={ faPeopleCarryBox }/> &nbsp;Soft Skills</h2>
                        <ul className='d-flex flex-column'>
                            <li>Team Player</li>
                            <li>Organized</li>
                            <li>Willing to Learn</li>
                            <li>Hard Working Attitude</li>
                        </ul>
                    </div>
                    
                </div>
            <div className='d-flex flex-column align-items-center'>
                <p className='paragraphText'>You can view more of my skills on: </p>
                <Link to="/Resume" id="resumeButton" className='homeButton'>My Resume</Link>
            </div>
        </section>
           </>;
  };
  
  export default Home;
  