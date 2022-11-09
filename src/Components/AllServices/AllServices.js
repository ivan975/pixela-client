import React from 'react';

const AllServices = () => {
    return (
        <div className="container p-2 sm:p-4 dark:text-gray-100 h-screen bg-gray-800">
            <h2 className="mx-auto mb-4 text-2xl font-semibold leading-tight">Services</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs" >
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
                            <th className="p-3">Services</th>
                            <th className="p-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td className="p-3">
                                <p>97412378923</p>
                            </td>
                            <td className="p-3">
                                <p>Microsoft Corporation</p>
                            </td>
                            <td className="p-3">
                                <p>14 Jan 2022</p>
                                <p className="dark:text-gray-400">Friday</p>
                            </td>
                            <td className="p-3">
                                <p>01 Feb 2022</p>
                                <p className="dark:text-gray-400">Tuesday</p>
                            </td>
                            <td className="p-3 text-right">
                                <p>$15,792</p>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-purple-400 dark:text-gray-900">
                                    <span>Pending</span>
                                </span>
                            </td>
                        </tr>
                        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td className="p-3">
                                <p>97412378923</p>
                            </td>
                            <td className="p-3">
                                <p>Tesla Inc.</p>
                            </td>
                            <td className="p-3">
                                <p>14 Jan 2022</p>
                                <p className="dark:text-gray-400">Friday</p>
                            </td>
                            <td className="p-3">
                                <p>01 Feb 2022</p>
                                <p className="dark:text-gray-400">Tuesday</p>
                            </td>
                            <td className="p-3 text-right">
                                <p>$275</p>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-purple-400 dark:text-gray-900">
                                    <span>Pending</span>
                                </span>
                            </td>
                        </tr>
                        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td className="p-3">
                                <p>97412378923</p>
                            </td>
                            <td className="p-3">
                                <p>Coca Cola co.</p>
                            </td>
                            <td className="p-3">
                                <p>14 Jan 2022</p>
                                <p className="dark:text-gray-400">Friday</p>
                            </td>
                            <td className="p-3">
                                <p>01 Feb 2022</p>
                                <p className="dark:text-gray-400">Tuesday</p>
                            </td>
                            <td className="p-3 text-right">
                                <p>$8,950,500</p>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-purple-400 dark:text-gray-900">
                                    <span>Pending</span>
                                </span>
                            </td>
                        </tr>
                        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td className="p-3">
                                <p>97412378923</p>
                            </td>
                            <td className="p-3">
                                <p>Nvidia Corporation</p>
                            </td>
                            <td className="p-3">
                                <p>14 Jan 2022</p>
                                <p className="dark:text-gray-400">Friday</p>
                            </td>
                            <td className="p-3">
                                <p>01 Feb 2022</p>
                                <p className="dark:text-gray-400">Tuesday</p>
                            </td>
                            <td className="p-3 text-right">
                                <p>$98,218</p>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-purple-400 dark:text-gray-900">
                                    <span>Pending</span>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllServices;