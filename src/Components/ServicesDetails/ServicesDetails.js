import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Services from '../Services/Services';

const ServicesDetails = () => {
    useTitle('Services')
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-zeta.vercel.app/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='bg-gray-800 h-screen'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ml-12 gap-3">
                {
                    services.map(service => <Services
                        key={service._id}
                        service={service}
                    ></Services>)
                }
            </div>
        </div>
    );
};

export default ServicesDetails;

// https://pixelas-authentication.web.app