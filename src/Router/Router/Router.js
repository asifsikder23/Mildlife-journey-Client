import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Error from "../../Pages/Error/Error";
import Gallery from "../../Pages/Gallery/Gallery";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Packages from "../../Pages/Packages/Packages";
import Signup from "../../Pages/Signup/Signup";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
        },
        {
            path:'/login',
            element: <Login></Login>,
        },
        {
            path:'/blog',
            element: <Blog></Blog>,
        },
        {
            path:'/gallery',
            element: <Gallery></Gallery>,
        },
        {
            path:'/signup',
            element: <Signup></Signup>,
        },
        {
            path:'/contact',
            element: <Contact></Contact>,
        },
        {
            path:'/packages',
            element: <Packages></Packages>,
        },
        {
            path:'/*',
            element: <Error></Error>,
        },
      ]
    }
  ]);

  export default router;