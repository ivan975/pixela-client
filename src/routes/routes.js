import { createBrowserRouter } from "react-router-dom";
import Details from "../Components/Details/Details";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ReviewDetails from "../Components/ReviewDetails/ReviewDetails";
import Reviews from "../Components/Reviews/Reviews";
import ServicesDetails from "../Components/ServicesDetails/ServicesDetails";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
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
                path: '/details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <Details />
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`),
                element: <Reviews />
            },
            {
                path: '/services',
                element: <ServicesDetails />
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