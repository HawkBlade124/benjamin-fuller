import { Link } from 'react-router-dom';


import demosite from "../images/demosite5.jpg";
import electracom  from "../images/electracomsupply.jpg";
import buyrite  from "../images/buyrite.jpg";
import luxe  from "../images/luxe.jpg";
import lindco  from "../images/lindco.jpg";
import geisler  from "../images/geislerco.jpg";
import edmonton  from "../images/edmonton.jpg";
import allLighting from "../images/alllightingdirect.jpg";
import b2bSpec from "../images/b2bSpec.jpg";
import clg from "../images/clg.jpg";
import cc from "../images/crosscountry.jpg";
import eurokbw from "../images/eurokbw.jpg";
import flamBeaux from "../images/flambeaux.jpg";
import gimple from "../images/gimple.jpg";
import justLED from "../images/justLED.jpg";
import lightandhome from "../images/lightandhome.jpg";
import nexgen from "../images/nexgentooling.jpg";
import plankandtile from "../images/plank-tile.jpg";
import showcaselighting from "../images/showcaselighting.jpg";
import stewart from "../images/stewartlighting.jpg";
import trisupply from "../images/tri-supply.jpg";

const Home = () => {
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
              <Link to="../projects/Luxe">
                <img className="projectImg w-100" src={luxe} alt="Luxe Lighting" />
                <div className="projectImgCaption">Luxe Lighitng</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/Lindco">
                <img className="projectImg w-100" src={lindco} alt="lindco" />
                <div className="projectImgCaption">Lindco</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/Geisler">
                <img className="projectImg w-100" src={geisler} alt="Geisler Co" />
                <div className="projectImgCaption">Geisler</div>
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
              <Link to="../pages/projects/CLG">
                <img className="projectImg w-100" src={clg} alt="CLG" />
                <div className="projectImgCaption">CLG</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/Crosscountry">
                <img className="projectImg w-100" src={cc} alt="Cross Country" />
                <div className="projectImgCaption">Cross Country</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/Euro">
                <img className="projectImg w-100" src={eurokbw} alt="EuroKBW" />
                <div className="projectImgCaption">Euro KBW</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/Flambeaux">
                <img className="projectImg w-100" src={flamBeaux} alt="Flambeaux" />
                <div className="projectImgCaption">Flambeaux</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/Gimple">
                <img className="projectImg w-100" src={gimple} alt="Gimple Electric" />
                <div className="projectImgCaption">Gimple Electric</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/justLED">
                <img className="projectImg w-100" src={justLED} alt="JustLED" />
                <div className="projectImgCaption">justLED</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/Lightandhome">
                <img className="projectImg w-100" src={lightandhome} alt="LightAndHome" />
                <div className="projectImgCaption">Light and Home</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/Nexgen">
                <img className="projectImg w-100" src={nexgen} alt="Nex Gen" />
                <div className="projectImgCaption">Nexgen</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/Plankandtile">
                <img className="projectImg w-100" src={plankandtile} alt="Plank and Tile" />
                <div className="projectImgCaption">Plankandtile</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/Showcase">
                <img className="projectImg w-100" src={showcaselighting} alt="Showcase Lighting" />
                <div className="projectImgCaption">Showcase Lighting</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/Stewart">
                <img className="projectImg w-100" src={stewart} alt="Stewart Lighting" />
                <div className="projectImgCaption">Stewart Lighting</div>
              </Link>
            </div>
            <div className="projectCol">
              <Link to="../pages/projects/Trisupply">
                <img className="projectImg w-100" src={trisupply} alt="Trisupply" />
                <div className="projectImgCaption">Trisupply</div>
              </Link>
            </div>
          </div>
      </>
    )

  };
  
  export default Home;
  