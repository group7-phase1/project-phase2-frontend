// pages/PackageDetails.js
import React from 'react';
import { Link } from 'react-router-dom';  // Importing Link to navigate to Update page
import axios from 'axios'; // Add this line to import Axios
const PackageDetails = ({ 
    packageName = "NodeJS package", 
    description = "Package Description",
    ratings = { netScore: "80", rampUp: "Good", maintenance: "Easy", newestVersion: "3.0" },
    previousVersions = ["1.10", "2.10", "2.5", "3.0"] // Default previous versions, you can fetch them or pass them as props
}) => {
    return (
        <div className="m-10 flex">
            <div className="flex-1 pr-5">
                <h1 className="text-2xl font-bold mb-4">{packageName}</h1>
                <p className="mb-6">{description}</p>

                <h2 className="text-xl font-bold mb-4">Ratings</h2>
                <ul className="bg-gray-100 p-4 rounded">
                    <li className="mb-2">Net Score: {ratings.netScore}</li>
                    <li className="mb-2">Ramp Up: {ratings.rampUp}</li>
                    <li className="mb-2">Maintenance: {ratings.maintenance}</li>
                    <li className="mb-2">Newest Version: {ratings.newestVersion}</li>
                </ul>

                {/* Link to navigate to UpdatePackage page */}
                <Link 
                    to="/update-package" 
                    className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Update
                </Link>
            </div>
            <div className="flex-1 pl-5 border-l">
                <h2 className="text-xl font-bold mb-4">Previous versions</h2>
                <ul className="bg-gray-100 p-4 rounded">
                    {previousVersions.map((v, index) => (
                        <li key={index} className={index !== previousVersions.length - 1 ? "mb-2" : ""}>
                            {v}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PackageDetails;
