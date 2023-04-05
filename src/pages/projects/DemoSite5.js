import image1 from "./demosite5-images/tile-shot.jpg";
import image2 from "./demosite5-images/mobile-shot.jpg";
import image3 from "./demosite5-images/footer-shot.jpg";
import { useNavigate } from  'react-router-dom';

const DemoSite5 = () =>{
    const navigate = useNavigate(); // <-- use hook in component

    return (
        <>
        
        <div id="tags">
            <div id="tagText">Technology Used:</div>
            <div className="d-flex flex-row">
                <div className="tagButtons firstBtn btn btn-info">HTML</div>
                <div className="tagButtons btn btn-info">CSS</div>
                <div className="tagButtons btn btn-info">jQuery</div>
                <div className="tagButtons btn btn-info">javascript</div>
                <div className="tagButtons btn btn-info">Bootstrap 5</div>
            </div>
        </div>

        <h1>DemoSite5</h1>
        <p className="paragraphText portfolioText">
            Demo Site 5 is a site that I built for XOLogic. They currently use this site to display the full functionality of their product. This site includes responsiveness, slideshows, tiles, gallery, and contact forms. Here is a preview of the site.

            <div className="individualProjectIMG">
                <img className="w-100" src={image1} alt="Demo Site 5 Project"/>
                <img className="w-100" src={image2} alt="Demo Site 5 Project"/>
                <img className="w-100" src={image3} alt="Demo Site 5 Project"/>
            </div>             
            
             Want the full experience? <a href="https://demosite5.xologic.com/" target="_blank">Take a Look!</a>
        </p>
        <button className="goBackBtn btn btn-primary" onClick = {() => navigate('/projects')} >Go Back </button> 
        </>
    )
}

export default DemoSite5;