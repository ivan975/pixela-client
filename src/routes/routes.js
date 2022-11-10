import { createBrowserRouter } from "react-router-dom";
import AddReview from "../Components/AddReview/AddReview";
import AllReviews from "../Components/AllReviews/AllReviews";
import AllServiceDetails from "../Components/AllServiceDetails/AllServiceDetails";
import Blogs from "../Components/Blogs/Blogs";
import Details from "../Components/Details/Details";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Reviews from "../Components/Reviews/Reviews";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

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
                loader: ({ params }) => fetch(`https://assignment-11-server-zeta.vercel.app/services/${params.id}`),
                element: <PrivateRoute><Details /></PrivateRoute>
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`https://assignment-11-server-zeta.vercel.app/review/${params.id}`),
                element: <PrivateRoute><Reviews /></PrivateRoute>
            },
            {
                path: '/services',
                element: <AllServiceDetails />
            },
            {
                path: '/addReview',
                element: <AddReview />
            },
            {
                path: '/addReview/:id',
                loader: ({ params }) => fetch(`https://assignment-11-server-zeta.vercel.app/service/${params.id}`),
                element: <AddReview />
            },
            {
                path: '/allReviews',
                element: <AllReviews />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Register />
            },
            {
                path: '/blogs',
                element: <Blogs />
            }
        ]
    }
]);