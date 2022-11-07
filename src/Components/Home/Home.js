import React from 'react';
import './Home.css';
import { Button } from 'flowbite-react'
// import { Link } from 'react-router-dom';
import wedding from '../../assests/wedding.svg';
const Home = () => {
    return (
        <div >
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ml-52">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Wedding
                            <span className="dark:text-violet-400"> Photography</span></h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Photography is my passion and I like to take photos of newly married couple.I have experience of almost 6 years of this.I have two shops one in Bangladesh and another one is in Italy.Currently, There are almost 10 other photographers are working with me.</p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Button color="success" className='p-4'>
                                Get Started
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-around p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={wedding} alt="" className="object-contain mr-52 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Home;