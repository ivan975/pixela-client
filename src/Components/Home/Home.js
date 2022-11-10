import React from 'react';
import './Home.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import wedding from '../../assests/wedding.svg';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
import useTitle from '../../hooks/useTitle';
import AllServiceDetails from '../AllServiceDetails/AllServiceDetails';

const Home = () => {
    useTitle('Home');

    return (
        <div className='h-screen'>
            <div className="bg-gray-800 text-gray-100 h-screen">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ml-52">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Wedding
                            <span className="dark:text-violet-400"> Planner</span></h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">I like to arrange parties.I have experience of almost 6 years of this.I have two shops one in Bangladesh and another one is in Italy.Currently, There are almost 10 other photographers are working with me.</p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button type="button" className="px-8 py-3 font-semibold rounded-full text-gray-700 bg-yellow-500">Get Started
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-around p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={wedding} alt="" className="object-contain mr-52 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </div>
            {/* discount section */}
            <section>
                <div className="p-6 py-12 bg-purple-400 text-gray-900">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                                <br className="sm:hidden" /> 30% Off
                            </h2>
                            <div className="space-x-2 text-center py-2 lg:py-0">
                                <span>For some premium service in a less price! Use code:</span>
                                <span className="font-bold text-lg">ivan1999</span>
                            </div>
                            <Link to="/" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400">Get Started</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* services part */}
            <section>
                <div className='bg-gray-800'>
                    <h1 className='text-white text-3xl font-bold pt-6'>Services</h1>
                    <ServicesDetails />
                    <Link to=''>
                        <button type="button" className="mb-12 px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">See All</button>
                        {/* <AllServiceDetails /> */}
                    </Link>
                </div>
            </section>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <h2 className=' text-white text-3xl font-bold pt-6 mb-6'>Contact Us</h2>
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold text-start">Get in touch</h1>
                        <p className="pt-2 pb-4 text-start">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Gulshan 2,Dhaka</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>01795909188</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>ivan@pixelas.com</span>
                            </p>
                        </div>
                    </div>
                    <form className="flex flex-col py-6 rounded-lg space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid bg-purple-400">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-purple-400 py-2 px-4 dark:bg-white" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 py-2 focus:ring-purple-400 dark:bg-white px-4" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-purple-400 dark:bg-white"></textarea>
                        </label>
                        <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-purple-400 dark:text-gray-900 focus:ring-purple-400 hover:ring-purple-400">Submit</button>
                    </form>
                </div>
            </section>
            <Footer />
        </div >
    );
};

export default Home;