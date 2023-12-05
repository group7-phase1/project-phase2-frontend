// pages/PackageDetails.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';  // Importing Link to navigate to Update page
import axios from 'axios'; // Add this line to import Axios

const handleSubmit = async (e) => {
  e.preventDefault();
  alert("Delete Packages");
}
const PackageDetails = () => {
    //const [packageName, setPackageName] = useState('');
    //const [packageDescription, setPackageDescription] = useState('');
    const [packages, setPackages] = useState([]);
    const [familyName, setFamilyName] = useState([]);
    // const location = useLocation();
    // const { state } = location;
    // const packageFamilyName = state?.packageFamilyName;
    let { packageFamilyId } = useParams();
    //const token = sessionStorage.getItem("authToken"), 
    // const packageName = "NodeJS package", 
    // const description = "Package Description",
    // const ratings = { netScore: "80", rampUp: "Good", maintenance: "Easy", newestVersion: "3.0" },
    const [previousVersions, setPreviousVersions] = useState([]); // Default previous versions, you can fetch them or pass them as props
    useEffect(() => {
        const fetchData = async () => {
          const token = sessionStorage.getItem("authToken");
          try {
            const result = await axios.post(
              "/api_get_package_details",
              {data: { packageFamilyID: packageFamilyId }},
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            const data = await result.data.packages;
            setPackages(data);
            
          } catch (error) {
            console.error("An error occurred:", error.response);
          }

          try {
            const result2 = await axios.post(
              "/api_get_package_family_name",
              {data: { packageFamilyID: packageFamilyId }},
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              }
            );
  
            const data2 = await result2.data.packages;
            setFamilyName(data2);
            
          } catch (error) {
            console.error("An error occurred:", error.response);
          }
        };
        fetchData();
      }, []);
      useEffect(() => {
        console.log("Packages: ", packages);
      }, [packages]);
      
      useEffect(() => {
        console.log("Family Name: ", familyName);
      }, [familyName]);

    return (
        <div className="m-10 flex">
            <div className="flex-1 pr-5">
                <h1 className="text-2xl font-bold mb-4"> {familyName.length > 0 ? familyName[0].package_family_name : 'Loading...'}</h1>
                <p className="mb-6">{"description"}</p>

                <h2 className="text-xl font-bold mb-4">Ratings</h2>
                <ul className="bg-gray-100 p-4 rounded">
                    <li className="mb-2">Net Score: {12}</li>
                    <li className="mb-2">Ramp Up: {12}</li>
                    <li className="mb-2">Maintenance: {12}</li>
                    <li className="mb-2">Newest Version: {12}</li>
                </ul>

                {/* Link to navigate to UpdatePackage page */}
                <Link 
                    to={`/update-package/${packageFamilyId}`} 
                    className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Update
                </Link>
            </div>
            {<div className="flex-1 pl-5 border-l">
            <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Delete all Packages
        </button>
    <h2 className="text-xl font-bold mb-4">Previous versions</h2>
    <ul className="bg-gray-100 p-4 rounded">
        {packages.map((v, index) => (
            <li 
                key={index} 
                className={`flex justify-between items-center ${index !== packages.length - 1 ? "mb-2" : ""}`}
            >
                <span>{v.version}</span> {/* Display version here */}
                <a 
                    href={v.zipped_file} 
                    download
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Download ZIP
                </a>
            </li>
        ))}
    </ul>
</div>}
        </div>
    );
};

export default PackageDetails;
