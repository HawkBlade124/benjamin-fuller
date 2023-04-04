import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import electracom  from "../images/electracomsupply.jpg";
import buyrite  from "../images/buyrite.jpg";
import luxe  from "../images/luxe.jpg";
import lindco  from "../images/lindco.jpg";
import geisler  from "../images/geislerco.jpg";
import edmonton  from "../images/edmonton.jpg";
import me from "../images/me.webp";

const Home = () => {
    return <>
        <section className='homeSection d-flex flex-column align-items-center'>
            <h1 id="homePageh1">Hi there! I am Ben Fuller</h1>
            <h2 id="homePageh2">I am a FullStack Web Developer</h2>         
            <div className='d-flex flex-column align-items-center'>
            <img id="mainPicture" className='w-100' src={me} />
                <p id="mainParagraph" className='paragraphText'>I am from Orem, Utah and have been developing websites for 4 years. I focus on mainly front-end technologies such as React, HTML, CSS, jQuery, javascript etc. I have been an web developer for a company that has many clients. I can do the same for you.</p>
                
            </div>
            <div id="buttonSet" className='d-flex flex-row align-items-center justify-content-between'>
            <a href="#work" className='homeButton'>See My Portfolio</a> 
            <p className="paragraphText">or </p><a id="skillsButton" href="#skillSet" className='homeButton'>See my skill set</a>
            </div>
        </section>
        <section className='homeSection d-flex flex-column align-items-center'>
            <div id="work"></div>
            <h2>Some of my Projects.</h2>
            <p className='paragraphText'>The company I work for deals with many clients. There are three types of clients that I create and maintain websites for: Fullsuite, Integration and Implimentation. I will explain more about the process of each site in great detail on my <Link to="/projects">Projects Page</Link>. But for now, lets take a look at the featured projects that I have built: </p>
            <div id='galleryWrap' className='d-flex flex-row justify-content-between flex-wrap'>
                <Link className="portfolioLink" to="/projects"><img className='portfolioImg' src={electracom} alt="electracom supply" /><p className="imageCaption">Electracom Supply</p></Link>
                <Link className="portfolioLink" to="/projects"><img className='portfolioImg' src={buyrite} alt="Buyrite" /><p className="imageCaption">Electracom Supply</p></Link>
                <Link className="portfolioLink" to="/projects"><img className='portfolioImg' src={luxe} alt="Luxe Lighting" /><p className="imageCaption">Luxe</p></Link>
                <Link className="portfolioLink" to="/projects"><img className='portfolioImg' src={lindco} alt="Lindco" /><p className="imageCaption">Lindco</p></Link>                
                <Link className="portfolioLink" to="/projects"><img className='portfolioImg' src={geisler} alt="Geisler" /><p className="imageCaption">Geisler</p></Link>                
                <Link className="portfolioLink" to="/projects"><img className='portfolioImg' src={edmonton} alt="Edmonton" /><p className="imageCaption">Edmonton</p></Link>                
            </div>
            <div className='d-flex flex-column align-items-center'>
                <p className='paragraphText'>I have a lot more where that came from. </p>
                <div id="workButton" className='homeButton'>See More of my Work</div>                
            </div>

        </section>
        <section id="lastSection" className='homeSection d-flex flex-column align-items-center'>
            <div id="skillSet"></div>
            <h2>Some of my Skills.</h2>
            <p className='paragraphText'>
                I have a variety of skills that help me accomplish my work on the internet. Such as <a href="https://www.youtube.com/watch?v=XsiiIa6bs9I" target="_blank">Nunchuck Skills, Bow Hunting Skills, Computer Hacking Skills</a>...just kidding. Here is the real list:
          
                <div id="skillCols" className='d-flex flex-row justify-content-center'>
                    <div className='col-md-4'>
                        <h2>Frontend</h2>
                        <ul className='d-flex flex-column'>
                            <li>React Native</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SCSS</li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <h2>Software</h2>
                        <ul className='d-flex flex-column'>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe XD</li>
                            <li>Visual Studio</li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <h2>Soft Skills</h2>
                        <ul className='d-flex flex-column'>
                            <li>Team Player</li>
                            <li>Organized</li>
                            <li>Willing to Learn</li>
                            <li>Hard Working Attitude</li>
                        </ul>
                    </div>
                    
                </div>
                </p>
            <div className='d-flex flex-column align-items-center'>
                <p className='paragraphText'>You can view more of my skills on: </p>
                <div id="resumeButton" className='homeButton'><Link to="/Resume">My Resume</Link></div>
            </div>
        </section>
           </>;
  };
  
  export default Home;
  