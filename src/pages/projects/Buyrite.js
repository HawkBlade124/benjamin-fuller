import image1 from "../project-images/buyrite/buyrite-login.jpg";
import image2 from "../project-images/buyrite/hamburger-menu-desktop.jpg";
import image3 from "../project-images/buyrite/homepage.jpg";
import image4 from "../project-images/buyrite/product-line.jpg";
import { useNavigate } from  'react-router-dom';


const Buyrite = () => {
    const navigate = useNavigate(); // <-- use hook in component
    return(
        <>
            <h1> <button className="btn btn-primary" onClick = {() => navigate('/projects')} >Go Back </button>Buyrite Project</h1>

            

            <p className="paragraphText portfolioText">Buyrite international is a company where they sell shipping containers of stuff instead of just single items. At XOLogic, we signed them up and made a bunch of customizations. They were an ongoing project and they are super custom from XOlogic's product. This client features a login page along with a catalog, about page, slideshow, and responsive design.</p>

            <div className="individualProjectIMG">
                <img className="w-100" src={image1} alt="Buyrite Project"/>
                <img className="w-100" src={image2} alt="Buyrite Project"/>
                <img className="w-100" src={image3} alt="Buyrite Project"/>
                <img className="w-100" src={image4} alt="Buyrite Project"/>
            </div>

        </>
    )
}

export default Buyrite;