import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex items-center h-screen p-16 bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl text-red-600">{error.statusText || error.message}</p>
                    <p className="mt-4 mb-8 dark:text-gray-400"></p>
                    <Link to="/" className="px-8 py-3 font-semibold rounded dark:bg-purple-400 dark:text-gray-900">Back to homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;