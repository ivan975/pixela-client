import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const AllReviews = () => {
    useTitle('Reviews');
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch('https://assignment-11-server-zeta.vercel.app/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
            .catch(err => toast.error(err.message))
    }, [refresh])

    const handleDelete = id => {
        fetch(`https://assignment-11-server-zeta.vercel.app/review/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                    setRefresh(!refresh);
                }
                else {
                    toast.error(data.error);
                }
            })
            .catch(err => toast.error(err.message))

    };
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
                        <tr>
                            <th className="p-3">Service name</th>
                            <th className="p-3">Description</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => {
                                return (
                                    <tr className="border-b border-opacity-20 text-white dark:border-gray-700 dark:bg-gray-900">
                                        <td className="p-3">
                                            <p>{review.serviceName}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{review.description}</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <span className="px-3 py-1 font-semibold rounded-md dark:bg-purple-400 dark:text-gray-900 mr-2">
                                                <span>Update</span>
                                            </span>
                                            <span className="px-3 py-1 font-semibold rounded-md dark:bg-purple-400 dark:text-gray-900">
                                                <button onClick={() => handleDelete(review._id)}>Delete</button>
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllReviews;