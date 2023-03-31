import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn }  from '@fortawesome/free-brands-svg-icons';
import logo from './benjamin-fuller-logo-horizontal.png';

const Header = () => {
    return(
        <>
        <header className="d-flex flex-row justify-content-between align-items-center w-100">
            <div id="leftHeader" className="col-4">
                <img src={logo} />
            </div>
            <div id='rightHeader' className="d-flex flex-row justify-content-center align-items-center col-4">
            <nav className='d-flex flex-row align-items-center'>
                <ul id="navigation" className="d-flex flex-row justify-content-between align-items-center col-4 w-100">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/Resume">Resume</Link></li>
                </ul>
            </nav>
            <a className="icons" href="mailto:benjaminirafuller@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a className="icons" href="https://www.linkedin.com/in/benfuller124/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
        </header>
        </>
    )
};

export default Header;