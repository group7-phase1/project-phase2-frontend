// pages/grid.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="m-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">My packages</h1>
                <button className="px-4 py-2 bg-gray-800 text-white rounded">Reset</button>
            </div>
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="Search..."
                    className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                />
            </div>
            <table className="min-w-full bg-white border rounded">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="py-2 px-4 border-b">Package Name</th>
                        <th className="py-2 px-4 border-b">Net Score</th>
                        <th className="py-2 px-4 border-b">Ramp up</th>
                        <th className="py-2 px-4 border-b">Maintanance</th>
                        <th className="py-2 px-4 border-b">Newest Version</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b hover:bg-gray-100">
                        <td className="py-2 px-4">NodeJS</td>
                        <td className="py-2 px-4"></td>
                        <td className="py-2 px-4"></td>
                        <td className="py-2 px-4"></td>
                        <td className="py-2 px-4"></td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                        <td className="py-2 px-4">Example package</td>
                        <td className="py-2 px-4"></td>
                        <td className="py-2 px-4"></td>
                        <td className="py-2 px-4"></td>
                        <td className="py-2 px-4"></td>
                    </tr>
                    <tr className="border-b hover:bg-gray-100">
                        <td className="py-2 px-4">Example package</td>
                        <td className="py-2 px-4"></td>
                        <td className="py-2 px-4"></td>
                        <td className="py-2 px-4"></td>
                        <td className="py-2 px-4"></td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-4">
                {/* naviagete to /create-package */}
                {/* <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Create package</button> */}
                <Link to="/create-package" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Create package</Link>
            </div>
        </div>
    );
};

export default Home;
