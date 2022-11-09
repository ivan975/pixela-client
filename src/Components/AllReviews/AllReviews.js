import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AllReviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
            .catch(err => toast.error(err.message))
    }, [])

    return (
        <div className="h-screen bg-gray-800 container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">Reviews</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                    </colgroup>
                    <thead className="dark:bg-gray-700">
                        <tr className="text-left">
                            <th className="p-3">ID</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Images</th>
                            <th className="p-3">Description</th>
                            <th className="p-3 text-right">Ratings</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => {
                                return (
                                    <tr className="border-b border-opacity-20 text-white dark:border-gray-700 dark:bg-gray-900">
                                        <td className="p-3">
                                            <p>{review._id}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{review.nome}</p>
                                        </td>
                                        <td className="p-3">
                                            <img src={review.img} alt="" className="block object-cover object-center rounded-md h-10 w-10 bg-gray-500" />
                                        </td>
                                        <td className="p-3">
                                            <p>{review.description}</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <p>{review.rating}</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <span className="px-3 py-1 font-semibold rounded-md dark:bg-purple-400 dark:text-gray-900">
                                                <span></span>
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllReviews;