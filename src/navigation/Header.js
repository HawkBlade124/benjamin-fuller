import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn }  from '@fortawesome/free-brands-svg-icons';
import logo from '../images/benjamin-fuller-logo-horizontal.png';
import { useRef } from 'react';

const Header = () => {
    const navRef = useRef();
    const showNavBar = () =>{
        navRef.current.classList.toggle("show")                
    }

    
    
    return(
        <>

        <header className="d-flex flex-row justify-content-between align-items-center w-100">
            <div id="leftHeader" className="w-100">
                <Link to="/"> <img src={logo} /></Link>
            </div>
            <div id='rightHeader' className="d-flex flex-row justify-content-center align-items-center w-100">
            <nav id="desktopNav" className='d-flex flex-row align-items-center'>
                <ul id="navigation" className="d-flex flex-row justify-content-between align-items-center col-4 w-100">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Resume">Experience</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul> 

            </nav>



            <a className="icons" href="mailto:benjaminirafuller@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a className="icons" href="https://www.linkedin.com/in/benfuller124/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <button className='hamburger-open'>
                    <FontAwesomeIcon icon={faBars} onClick={showNavBar}/>
            </button>
            </div>
        </header>

        <nav ref={navRef} id="mobileMenu" className='d-flex flex-row align-items-end'>

                <button className='hamburger-close' >
                    <FontAwesomeIcon icon={faTimes} onClick={showNavBar} />
                </button> 

                <ul id="navigation" className="d-flex flex-column justify-content-between align-items-end w-100">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Resume">Experience</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>  
              
            </nav>
        </>
    )
};

export default Header;