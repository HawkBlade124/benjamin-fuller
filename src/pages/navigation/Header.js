import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn }  from '@fortawesome/free-brands-svg-icons';
import logo from './benjamin-fuller-logo-horizontal.png';

const Header = () => {
    return(
        <>
        <header class="d-flex flex-row justify-content-center align-items-center w-100">
            <div id="leftHeader" class="col-4">
                <img src={logo} />
            </div>
            <div id='rightHeader' class="d-flex flex-row justify-content-center col-4">
            <nav>
                <ul id="navigation" class="d-flex flex-row justify-content-between align-items-center col-4 w-100">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/Resume">Resume</Link></li>
                </ul>
            </nav>
            <a href="mailto:benjaminirafuller@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="https://www.linkedin.com/in/benfuller124/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
        </header>
        </>
    )
};

export default Header;