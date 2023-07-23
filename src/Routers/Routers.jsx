import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                path: "/",
                element:<Home></Home>,
                loader: () => fetch(`/Reviews.jsx`),
            },
            
        ]

    }
])
export default router;