import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    const { _id, name, price, description, image } = service;
    return (
        <div>
            <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100 mr-12 mb-5">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <Link to='' className="mb-0 capitalize dark:text-gray-100">{name}</Link>
                    </div>
                    <Link to=''>See All</Link>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span>6 min ago</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Link to='' className="block">
                            <h3 className="text-xl font-semibold text-purple-400">{name}</h3>
                        </Link>
                        <p className="leading-snug dark:text-gray-400">{description}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;