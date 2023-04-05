import image1 from "../project-images/buyrite/buyrite-login.jpg";
import image2 from "../project-images/buyrite/hamburger-menu-desktop.jpg";
import image3 from "../project-images/buyrite/homepage.jpg";
import image4 from "../project-images/buyrite/product-line.jpg";
import { useNavigate } from  'react-router-dom';


const Buyrite = () => {
    const navigate = useNavigate(); // <-- use hook in component
    return(
        <>
        <div id="tags" className="d-flex flex-column align-items-center">
            <div id="tagText">Technology Used:</div>
            <div className="d-flex flex-row">
                <div className="tagButtons firstBtn btn btn-info">HTML</div>
                <div className="tagButtons btn btn-info">CSS</div>
                <div className="tagButtons btn btn-info">jQuery</div>
            </div>
        </div>
            <h1>Buyrite Project</h1>            
            <div id="description" className="d-flex flex-row ">
                <p className="paragraphText portfolioText">Buyrite international is a company where they sell shipping containers of stuff instead of just single items. At XOLogic, we signed them up and made a bunch of customizations. They were an ongoing project and they are super custom from XOlogic's product. This client features a login page along with a catalog, about page, slideshow, and responsive design. For this site, I can't give out the login information. But I can provide screenshots.<br /><br />
                <button className="goBackBtn btn btn-primary" onClick = {() => navigate('/projects')} >Go Back </button>  
                </p>

                <div className="individualProjectIMG">
                    <img className="w-100" src={image1} alt="Buyrite Project"/>
                    <img className="w-100" src={image2} alt="Buyrite Project"/>
                    <img className="w-100" src={image3} alt="Buyrite Project"/>
                    <img className="w-100" src={image4} alt="Buyrite Project"/>
                </div> 
            </div>
         
        </>
    )
}

export default Buyrite;