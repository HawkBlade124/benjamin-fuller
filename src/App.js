
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from './pages/Contact';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  { path: '/', 
    element:<RootLayout />,
    children: [
      { path: '/', element:<Home /> },
      { path: '/about', element:<About />},
      { path: '/projects', element:<Projects />},
      { path: '/resume', element:<Resume />},
      { path: '/contact', element:<Contact />}
    ]
  }
])

function App() {
    return ( <RouterProvider router={router}/>
  );
}

export default App;
