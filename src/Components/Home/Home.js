import React from 'react';
import './Home.css';
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import wedding from '../../assests/wedding.svg';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
const Home = () => {

    return (
        <div>
            <div className="bg-gray-800 text-gray-100 h-screen">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ml-52">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Wedding
                            <span className="dark:text-violet-400"> Photography</span></h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Photography is my passion and I like to take photos of newly married couple.I have experience of almost 6 years of this.I have two shops one in Bangladesh and another one is in Italy.Currently, There are almost 10 other photographers are working with me.</p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button type="button" className="px-8 py-3 font-semibold rounded-full text-gray-200 bg-yellow-500">Get Started
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
            <div className='bg-gray-800'>
                <ServicesDetails />
            </div>
            <Footer />
        </div >
    );
};

export default Home;