
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from './pages/Contact';
import RootLayout from './pages/Root';
import NoPage from './pages/NoPage';
import Buyrite from './pages/projects/Buyrite';
import Electracom from './pages/projects/Electracom';
import Luxe from './pages/projects/Luxe';
import Lindco from './pages/projects/Lindco';
import Geisler from './pages/projects/Geisler.js';
import Edmonton from './pages/projects/Edmonton';
import B2BSpec from './pages/projects/B2BSpec';
import CLG from './pages/projects/CLG';
import CrossCountry from './pages/projects/Crosscountry';
import Euro from './pages/projects/EuroKBW';
import Gimple from './pages/projects/Gimple';
import JustLED from './pages/projects/JustLED';
import LightAndHome from './pages/projects/LightAndHome';
import Nexgen from './pages/projects/Nexgen';
import PlankAndTile from './pages/projects/PlankAndTile';
import Showcase from './pages/projects/Showcase';
import Stewart from './pages/projects/Stewart';
import Trisupply from './pages/projects/Trisupply';
import AllLighting from './pages/projects/AllLighting';
import Flambeaux from './pages/projects/Flambeaux';
import DemoSite5 from './pages/projects/DemoSite5';

const router = createBrowserRouter([
  { path: '/', 
    element:<RootLayout />,
    children: [
      { path: '/', element:<Home /> },
      { path: '/about', element:<About />},
      { path: '/projects', element:<Projects />},
        { path: '/projects/Buyrite', element:<Buyrite />},
        { path: '/projects/Electracom', element:<Electracom />},      
        { path: '/projects/Luxe', element:<Luxe />},
        { path: '/projects/Lindco', element:<Lindco />},
        { path: '/projects/Geisler', element:<Geisler />},
        { path: '/projects/Edmonton', element:<Edmonton />},
        { path: '/projects/AllLighting', element:<AllLighting />},
        { path: '/projects/B2BSpec', element:<B2BSpec />},
        { path: '/projects/CLG', element:<CLG />},
        { path: '/projects/CrossCountry', element:<CrossCountry />},
        { path: '/projects/Euro', element:<Euro />},
        { path: '/projects/Flambeaux', element:<Flambeaux />},
        { path: '/projects/Gimple', element:<Gimple />},
        { path: '/projects/JustLED', element:<JustLED />},
        { path: '/projects/LightAndHome', element:<LightAndHome />},
        { path: '/projects/Nexgen', element:<Nexgen />},
        { path: '/projects/PlankAndTile', element:<PlankAndTile />},
        { path: '/projects/Showcase', element:<Showcase />},
        { path: '/projects/Stewart', element:<Stewart />},
        { path: '/projects/Trisupply', element:<Trisupply />},
        { path: '/projects/DemoSite5', element:<DemoSite5 />},
      { path: '/resume', element:<Resume />},
      { path: '/contact', element:<Contact />},
      { path: '*', element:<NoPage />},
    ]
  }
])

function App() {
    return ( <RouterProvider router={router}/>
  );
}

export default App;
