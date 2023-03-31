import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import electracom  from "../images/electracomsupply.jpg";
import buyrite  from "../images/buyrite.jpg";
import luxe  from "../images/luxe.jpg";
import lindco  from "../images/lindco.jpg";
import geisler  from "../images/geislerco.jpg";
import edmonton  from "../images/edmonton.jpg";

const Home = () => {
    return <>
        <section className='homeSection'>
            <h1 id="homePageh1">Hi there! I am Ben Fuller</h1>
            <h2 id="homePageh2">I am a FullStack Web Developer</h2>         
            <p className='paragraphText'>I am from Orem, Utah and have been developing websites for 4 years. I focus on mainly front-end technologies such as React, HTML, CSS, jQuery, javascript etc. I have been an web developer for a company that has many clients. I can do the same for you.</p>
            <a className='homeButton'>Let's take a look <FontAwesomeIcon icon={faChevronDown} /> </a>
        </section>
        <section className='homeSection'>
            <h2>Why choose me to be your web developer?</h2>

        </section>
        <section className='homeSection'>
            <h2>Some of my Projects</h2>
            <div id='galleryWrap' className='d-flex flex-row justify-content-between flex-wrap'>
                <Link className="portfolioLink" to="/projects"><img className='portfolioImg' src={electracom} alt="electracom supply" /><p className="imageCaption">Electracom Supply</p></Link>
                <Link className="portfolioLink" to="/projects"><img className='portfolioImg' src={buyrite} alt="Buyrite" /><p className="imageCaption">Electracom Supply</p></Link>
                <Link className="portfolioLink" to="/projects"><img className='portfolioImg' src={luxe} alt="Luxe Lighting" /><p className="imageCaption">Luxe</p></Link>
                <Link className="portfolioLink" to="/projects"><img className='portfolioImg' src={lindco} alt="Lindco" /><p className="imageCaption">Lindco</p></Link>                
                <Link className="portfolioLink" to="/projects"><img className='portfolioImg' src={geisler} alt="Geisler" /><p className="imageCaption">Geisler</p></Link>                
                <Link className="portfolioLink" to="/projects"><img className='portfolioImg' src={edmonton} alt="Edmonton" /><p className="imageCaption">Edmonton</p></Link>                
            </div>
            <p className='paragraphText'>I have a lot more where that came from. </p>
            <a className='homeButton'>See More of my Work</a>
        </section>
           </>;
  };
  
  export default Home;
  