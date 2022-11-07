import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home";
import Packages from "../../Pages/Packages/Packages";


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
            path:'/contact',
            element: <Contact></Contact>,
        },
        {
            path:'/packages',
            element: <Packages></Packages>,
        },
      ]
    }
  ]);

  export default router;