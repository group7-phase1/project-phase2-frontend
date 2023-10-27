// pages/uploadOnePackage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'; // Import Axios
const UpdatePackage = () => {
  const [version, setVersion] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (version && file) {
      // TODO: Upload logic here
      console.log("Version:", version);
      console.log("File:", file);
    }

    try {
      // Make an Axios POST request to your API endpoint
      const response = await axios.post('/api_update_package', {
        version: version,
        file: file
      });

      if (response.data.success) {
        // Handle a successful login (e.g., redirect to another page)
        console.log('Successful upload');
      } else {
        // Handle a failed login (e.g., show an error message)
        console.log('Failed upload');
      }
    } catch (error) {
      // Handle any network or server error
      console.error('An error occurred:', error);
    }

  };

  return (
    <div className="m-10 flex">
      <div className="flex-1 pr-5">
        <h1 className="text-2xl font-bold mb-4">NodeJS package</h1>
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
      <div className="flex-1 pl-5 border-l">
        <h2 className="text-xl font-bold mb-4">Previous versions</h2>
        <ul className="bg-gray-100 p-4 rounded">
          <li className="mb-2">1.10</li>
          <li>2.10</li>
          {/* Add more versions as needed */}
        </ul>
      </div>
    </div>
  );
};

export default UpdatePackage;
