// pages/uploadOnePackage.js
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios'; // Import Axios
import { fireEvent } from "@testing-library/react";

const UpdatePackage = () => {
  //const [name, setName] = useState("");
  const [version, setVersion] = useState("");
  const [file, setFile] = useState(null);
  const [isSecret, setIsSecret] = useState(false); // Initialize isSecret as false
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [familyName, setFamilyName] = useState([]);
  let { packageFamilyId } = useParams();
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    // Create an instance of FormData
    const formData = new FormData();
    formData.append("packageFamilyName", familyName);
    formData.append("version", version);
    formData.append("zipFile", file);
    formData.append("zipFileName", file.name);
    formData.append("secret", isSecret);
    formData.append("packageFamilyID", packageFamilyId);

    try {
      const token = sessionStorage.getItem("authToken");
      console.log("token: " + token);
      // console.log("token: " + token)
      const response = await axios.post("/api_update_packages", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log(response.data);

      if (response.data.success) {
        alert("Package update successful");
        console.log("Package update successful");
        navigate("/");
      } else {
        alert("Package update failed: " + response.data.message);
        console.log("Package update failed", response.data.message);
      }
    } catch (error) {
      alert("Package update failed: " + error);
      console.error(
        "An error occurred:",
        error.response ? error.response.data : error
      );

    }
    // try {
    //   const response = await axios.post('/api_update_packages', {
    //     file: file, 
    //     zipFileName: file.name,
    //     userId: 11,
    //     packageFamilyName: file.name,
    //     version: version,
    //     packageFamilyID: 6
    //   });
    //   console.log("Fam Id", packageFamilyId)
    //   console.log(response.data);

    //   if (response.data.success) {
    //     console.log('Package update successful');
    //   } else {
    //     console.log('Package update failed');
    //   }
    // } catch (error) {
    //   console.error('An error occurred:', error);
    // }
  };

  return (
    <div className="m-10 flex">
      <div className="flex-1 pr-5">
        <h1 className="text-2xl font-bold mb-4">{familyName.length > 0 ? familyName[0].package_family_name : 'Loading...'}</h1>
        <p className="mb-6">Package Description</p>

        <p className="font-semibold mb-2">
          Fill in information to upload new version.
        </p>
        <input
          type="text"
          placeholder="Version:"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 mb-4"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-500 mb-4"
          accept=".zip"
        />

        <button
          onClick={handleSubmit}
          className="w-full mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update
        </button>
        <Link to="/multiple-upload">
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Update multiple packages
          </button>
        </Link>
      </div>
      {<div className="flex-1 pl-5 border-l">
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

export default UpdatePackage;
