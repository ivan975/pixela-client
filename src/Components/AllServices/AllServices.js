import React, { useEffect, useState } from 'react';
import AllServiceDetails from '../AllServiceDetails/AllServiceDetails';

const AllServices = () => {
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-zeta.vercel.app/services')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    return (
        <div className='bg-gray-800 h-screen'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ml-12 gap-3">
                {
                    allServices.map(allService =>
                        <AllServiceDetails
                            key={allService._id}
                            allService={allService}
                        ></AllServiceDetails>
                    )
                }
            </div>
        </div>
    );
};

export default AllServices;