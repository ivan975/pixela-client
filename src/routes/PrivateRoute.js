import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Components/Contexts/UseContexts';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return (
            <div class="flex items-center justify-center space-x-2 animate-bounce">
                <div class="w-8 h-8 bg-black rounded-full"></div>
                <div class="w-8 h-8 bg-black rounded-full"></div>
                <div class="w-8 h-8 bg-black rounded-full"></div>
            </div>
        );
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;