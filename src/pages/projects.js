
import { Link } from 'react-router-dom';

import allLighting from "../images/alllightingdirect.jpg";
import b2bSpec from "../images/b2bSpec.jpg";
import buyrite  from "../images/buyrite.jpg";
import demosite from "../images/demosite5.jpg";
import edmonton  from "../images/edmonton.jpg";
import electracom  from "../images/electracomsupply.jpg";
import gimple from "../images/gimple.jpg";
import lightandhome from "../images/lightandhome.jpg";
import lindco  from "../images/lindco.jpg";

const Projects = () => {
    return (
      <>
          <h1>MY Projects</h1>
          <p id="projectsText" className="paragraphText">Welcome to the best part of the website. You get to look at all of the work I have done for clients over the few years that I have been a developer. Check them out!</p>
          <div className="projects d-flex flex-row flex-wrap justify-content-between">
          <div className="projectCol">
              <Link to="../projects/DemoSite5">
                <img className="projectImg w-100" src={demosite} alt="Demo Site 5" />
                <div className="projectImgCaption">Demo Site 5</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../projects/Buyrite">
                <img className="projectImg w-100" src={buyrite} alt="buyrite" />
                <div className="projectImgCaption">BuyRite International</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../projects/Electracom">
                <img className="projectImg w-100" src={electracom} alt="buyrite" />
                <div className="projectImgCaption">Electracom</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/Lindco">
                <img className="projectImg w-100" src={lindco} alt="Lindco" />
                <div className="projectImgCaption">Lindco</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/Edmonton">
                <img className="projectImg w-100" src={edmonton} alt="Edmonton" />
                <div className="projectImgCaption">Edmonton</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/AllLighting">
                <img className="projectImg w-100" src={allLighting} alt="All Lighting" />
                <div className="projectImgCaption">All Lighting Direct</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/B2BSpec">
                <img className="projectImg w-100" src={b2bSpec} alt="B2B Spec" />
                <div className="projectImgCaption">B2B Spec</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/Gimple">
                <img className="projectImg w-100" src={gimple} alt="Gimple Electric" />
                <div className="projectImgCaption">Gimple Electric</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/Lightandhome">
                <img className="projectImg w-100" src={lightandhome} alt="LightAndHome" />
                <div className="projectImgCaption">Light and Home</div>
              </Link>
            </div>
          </div>
      </>
    )

  };
  
  export default Projects;
