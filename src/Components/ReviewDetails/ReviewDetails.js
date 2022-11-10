import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/UseContexts';
import Reviews from '../Reviews/Reviews';

const ReviewDetails = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-11-server-zeta.vercel.app/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user?.email])
    return (
        <div className='bg-gray-800 h-screen'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ml-12 gap-3">
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </div>
    );
};
export default ReviewDetails;