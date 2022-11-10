import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllServiceDetails = ({ allService }) => {
    useTitle('All Services')
    const { name, price, description, image } = allService;
    console.log(allService);

    return (
        <div>
            <div className="max-w-lg p-4 text-gray-100 mr-12">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServiceDetails;