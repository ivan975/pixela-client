import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
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
        ]
    }
]);