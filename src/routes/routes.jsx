
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Main from "../layout/Main";


export const router = createBrowserRouter([
    {path:'/',element:<Main />, children:[
        {path:'/', element:<Home />}
    ]}
])