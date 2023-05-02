/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Shared/Home/Home";
import ChefProfile from "../components/Shared/ChefProfile/ChefProfile";
import ChefDetails from "../components/Private/ChefDetails/ChefDetails";
import Register from "../components/Shared/Register/Register";
import Login from "../components/Shared/Login/Login";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter ([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chefs')
            }, 
            {
                path: '/chef-profile',
                element: <ChefProfile></ChefProfile>
            }, 
            {
                path: '/chef-profile/:id',
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;