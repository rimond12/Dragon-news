import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";


const router = createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        children: [
            {
                path:'',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<CategoryNews></CategoryNews>,
                loader: ()=>fetch('/news.json')
            },
        ]
    },
    {
        path:'auth',
        element: <p>its auth</p>
    },
    {
        path:'news',
        element: <h2>its news</h2>
    },
    {
        path:'/*',
        element: <h2>error</h2>
    }
])

export default router;