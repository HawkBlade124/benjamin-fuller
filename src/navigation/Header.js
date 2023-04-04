import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn }  from '@fortawesome/free-brands-svg-icons';
import logo from '../images/benjamin-fuller-logo-horizontal.png';

const Header = () => {
    return(
        <>
        <header className="d-flex flex-row justify-content-between align-items-center w-100">
            <div id="leftHeader" className="col-4">
                <Link to="/"> <img src={logo} /></Link>
            </div>
            <div id='rightHeader' className="d-flex flex-row justify-content-center align-items-center col-4">
            <nav className='d-flex flex-row align-items-center'>
                <ul id="navigation" className="d-flex flex-row justify-content-between align-items-center col-4 w-100">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Resume">Experience</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
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