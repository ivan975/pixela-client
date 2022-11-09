import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="p-4 bg-gray-800 text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <Link to="/" aria-label="Back to homepage" className="flex items-center p-2 text-4xl font-bold">
                    Pixelas
                </Link>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <Link to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-amber-400 dark:border-amber-400">Home</Link>
                    </li>
                    <li className="flex">
                        <Link href="/about" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">About</Link>
                    </li>
                    <li className="flex">
                        <Link href="/blogs" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</Link>
                    </li>
                    <li className="flex">
                        <Link href="/contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Contact Us</Link>
                    </li>
                    <li className="flex">
                        <Link href="/service" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Services</Link>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="self-center px-8 py-3 rounded">
                        <Link to='/login'>Sign in</Link>
                    </button>
                    <button className="self-center px-8 py-3 font-semibold rounded dark:bg-amber-400 dark:text-gray-900">
                        <Link to='/signup'>Sign up</Link>
                    </button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;