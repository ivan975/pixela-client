import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Contexts/UseContexts';

const AllReviews = () => {

    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://assignment-11-server-zeta.vercel.app/review')
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
                            <th className="p-3">Service name</th>
                            <th className="p-3">Description</th>
                            <th className="p-3 text-right">Ratings</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr className="border-b border-opacity-20 text-white dark:border-gray-700 dark:bg-gray-900">
                                <td className="p-3">
                                    <p>{user.uid}</p>
                                </td>
                                <td className="p-3">
                                    <p>{user.email}</p>
                                </td>
                                <td className="p-3">
                                    <img src={user.img} alt="" className="block object-cover object-center rounded-md h-10 w-10 bg-gray-500" />
                                </td>
                                <td className="p-3">
                                    <p>{user.description}</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>{user.rating}</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-purple-400 dark:text-gray-900">
                                        <span></span>
                                    </span>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllReviews;