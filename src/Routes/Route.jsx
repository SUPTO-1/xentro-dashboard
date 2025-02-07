import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Dashboard from "../Dashboard/Dashboard";
import AllUsers from "../Dashboard/AllUsers";
import AllProducts from "../Dashboard/AllProducts";
import AddProduct from "../Dashboard/AddProduct";
import UserDetails from "../Dashboard/UserDetails";
const routes = createBrowserRouter([
    {
       path:'/',
       element: <Root></Root>,
       children:[
        {
           path:"dashboard",
           element:<Dashboard></Dashboard>,
           children:[
            {
                path:"allUsers",
                element:<AllUsers></AllUsers>
            },
            {
                path:"allProducts",
                element:<AllProducts></AllProducts>
            },
            {
                path:"addProduct",
                element:<AddProduct></AddProduct>
            },
            {
                path:"userDetails/:id",
                element:<UserDetails></UserDetails>,
            }
           ]
        }
    ]
    }
])
export default routes;