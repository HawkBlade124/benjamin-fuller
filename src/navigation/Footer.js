import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn }  from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return <>
            <footer className='d-flex flex-row align-items-center'>
                <div id="copyright">
                    Copyright &copy; 2023 Benjamin Fuller
                </div>
                <a className="icons" href="mailto:benjaminirafuller@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a className="icons" href="https://www.linkedin.com/in/benfuller124/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </footer>    
           </>;
  };
  
  export default Footer;
  