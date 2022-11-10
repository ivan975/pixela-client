import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Services = ({ service }) => {
    useTitle('Services')
    const { _id, name, price, description, image } = service;

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
                        <PhotoProvider>
                            <PhotoView src={image}>
                                <img src={image} style={{ objectFit: 'cover' }} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <div className="flex items-center">
                            <span>{price} bucks</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Link to='' className="block">
                            <h3 className="text-xl font-semibold text-purple-400">{name}</h3>
                        </Link>
                        <p className="leading-snug text-gray-400">{description}</p>
                        <Link to={`../details/${_id}`} type="button" className="px-8 py-3 mr-5 font-semibold rounded-full bg-gray-100 text-gray-800">View details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;