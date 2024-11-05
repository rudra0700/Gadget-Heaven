import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import AllCards from "../components/AllCards";
import AllGadget from "../components/AllGadget";
import CardDetails from "../components/CardDetails";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/categories.json'),
                children : [
                    {
                        path: '/',
                        element: <AllCards></AllCards>,
                        loader: () => fetch('/fake.json')
                    },
                    {
                        path: '/category/:category',
                        element: <AllCards></AllCards>,
                        loader: () => fetch('/fake.json')
                    }
                ]
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },

            {
                path: '/allGadget',
                element: <AllGadget></AllGadget>,
                loader: () => fetch('/fake.json')
            },
            {
                path: '/card/:product_id',
                element: <CardDetails></CardDetails>,
                loader: () => fetch('/fake.json')

            }
           

           
        ]
    }, 
   
    
])

export default router