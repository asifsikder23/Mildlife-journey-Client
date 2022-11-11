import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Addpkg from "../../Pages/AddPkg/Addpkg";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Error from "../../Pages/Error/Error";
import Gallery from "../../Pages/Gallery/Gallery";
import Home from "../../Pages/Home/Home";
import ShowReview from "../../Pages/Home/Services/Reviews/ShowReview";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ReviewUpdate from "../../Pages/MyReviews/ReviewUpdate";
import Packages from "../../Pages/Packages/Packages";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";


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
            path:'/addpackage',
            element: <PrivateRoute><Addpkg></Addpkg></PrivateRoute>,
        },
        {
            path:'/myreviews',
            element: <PrivateRoute><MyReviews></MyReviews> </PrivateRoute>,
        },
        {
            path:'/reviews',
            element: <ShowReview></ShowReview>,
        },
        {
            path:'/reviewUpdate/:id',
            element: <ReviewUpdate></ReviewUpdate>,
            loader: ({params}) => fetch(`http://localhost:5000/review/${params.id}`)
        },
        
        {
            path:'/serviceDetails/:id',
            loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`),
            element: <ServiceDetails></ServiceDetails>
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