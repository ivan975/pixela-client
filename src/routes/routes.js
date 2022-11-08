import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Services from "../Components/Services/Services";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/service',
                element: <Services />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Register />
            },
        ]
    }
]);