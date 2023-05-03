/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Shared/Home/Home";
import ChefProfile from "../components/Shared/ChefProfile/ChefProfile";
import ChefDetails from "../components/Private/ChefDetails/ChefDetails";
import Register from "../components/Shared/Register/Register";
import Login from "../components/Shared/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../components/Shared/Error/Error";
import Blog from "../components/Shared/Blog/Blog";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter ([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-ten-server-methubd.vercel.app/chefs')
            }, 
            {
                path: '/chef-profile',
                element: <ChefProfile></ChefProfile>
            }, 
            {
                path: '/chef-profile/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-ten-server-methubd.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }, 
    {
        path: '/*',
        element: <Error></Error>
    }
])

export default router;