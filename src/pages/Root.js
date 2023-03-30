import { Outlet } from 'react-router-dom';
import Header from '../pages/navigation/Header';
import Footer from '../pages/navigation/Footer'
function RootLayout(){
    return  <>    
        <Header />
        <div className='container'>
            <Outlet />
        </div>
        <Footer />
    </>
}

export default RootLayout