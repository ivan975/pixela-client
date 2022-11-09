import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

const ServicesDetails = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
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