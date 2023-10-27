import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    
    const data = [
        { name: 'NodeJS', netScore: 0, rampUp: 0, maintenance: 0, newestVersion: '' },
        { name: 'Example package 1', netScore: 0, rampUp: 0, maintenance: 0, newestVersion: '' },
        { name: 'Example package 2', netScore: 0, rampUp: 0, maintenance: 0, newestVersion: '' },
    ];

    useEffect(() => {
        filterData('');
    }, []);

    const filterData = (query) => {
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const handleSearchInput = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        filterData(query);
    };

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
                    value={searchQuery}
                    onChange={handleSearchInput}
                />
            </div>
            <table className="min-w-full bg-white border rounded">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="py-2 px-4 border-b">Package Name</th>
                        <th className="py-2 px-4 border-b">Net Score</th>
                        <th className="py-2 px-4 border-b">Ramp up</th>
                        <th className="py-2 px-4 border-b">Maintenance</th>
                        <th className="py-2 px-4 border-b">Newest Version</th>
                        <th className="py-2 px-4 border-b"></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-gray-100">
                            <td className="py-2 px-4">{item.name}</td>
                            <td className="py-2 px-4">{item.netScore}</td>
                            <td className="py-2 px-4">{item.rampUp}</td>
                            <td className="py-2 px-4">{item.maintenance}</td>
                            <td className="py-2 px-4">{item.newestVersion}</td>
                            <Link to="/package-details" className='py-2 px-4 text-xs bg-blue-500 text-white rounded hover:bg-blue-600'>Details</Link>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4">
                <Link to="/create-package" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover-bg-blue-600">Create package</Link>
            </div>
        </div>
    );
};

export default Home;


