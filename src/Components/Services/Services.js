import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    const { _id, name, price, description, image } = service;
    console.log(name);
    return (
        <div>
            <div className="max-w-lg p-4 text-gray-100 mr-12 mb-5">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <Link to='' className="mb-0 capitalize text-gray-100">{name}</Link>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                        <div className="flex items-center">
                            <span>{price} bucks</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Link to='' className="block">
                            <h3 className="text-xl font-semibold text-purple-400">{name}</h3>
                        </Link>
                        <p className="leading-snug text-gray-400">{description}</p>
                        <Link to={`../services/${_id}`} type="button" className="px-8 py-3 font-semibold rounded-full bg-gray-100 text-gray-800">View details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;