import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import CollageInfo from "../Components/CollageInfo/CollageInfo";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                path: "/",
                element:<CollageInfo></CollageInfo>,
            }
        ]

    }
])
export default router;