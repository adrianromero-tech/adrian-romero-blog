import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from './app/pages/home';
import About from './app/pages/about';
import Archive from './app/pages/archive';
import Contact from './app/pages/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/archive',
    element: <Archive />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

export default router;
