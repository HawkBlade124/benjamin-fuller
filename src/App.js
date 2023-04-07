
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
import Lindco from './pages/projects/Lindco';
import Edmonton from './pages/projects/Edmonton';
import B2BSpec from './pages/projects/B2BSpec';
import Gimple from './pages/projects/Gimple';
import LightAndHome from './pages/projects/LightAndHome';
import AllLighting from './pages/projects/AllLighting';
import DemoSite5 from './pages/projects/DemoSite5';

const router = createBrowserRouter([
  { path: '/', 
    element:<RootLayout />,
    children: [
      { path: '/', element:<Home /> },
      { path: '/about', element:<About />},
      { path: '/projects', element:<Projects />},
        { path: '/projects/AllLighting', element:<AllLighting />},
        { path: '/projects/B2BSpec', element:<B2BSpec />},
        { path: '/projects/Buyrite', element:<Buyrite />},
        { path: '/projects/DemoSite5', element:<DemoSite5 />},
        { path: '/projects/Edmonton', element:<Edmonton />},
        { path: '/projects/Electracom', element:<Electracom />},              
        { path: '/projects/Lindco', element:<Lindco />},
        { path: '/projects/Gimple', element:<Gimple />},
        { path: '/projects/LightAndHome', element:<LightAndHome />},
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
