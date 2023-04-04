import { Outlet } from 'react-router-dom';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
function RootLayout(){
    return  <>
    <div id="backToTop"></div>
        <Header />
        <div id="containerHeight" className='container'>
            <Outlet />
        </div>
        <Footer />
        <a id="backToTopButton" href="#backToTop"><FontAwesomeIcon icon={faChevronUp}/></a>
    </>
}

export default RootLayout