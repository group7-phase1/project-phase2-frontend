import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const MultipleUpload = () => {
  const [packages, setPackages] = useState([{ name: '', version: '', file: null, isSecret: false }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the group upload/update logic here
    for (let i = 0; i < packages.length; i++) {
      console.log(packages[i]);
    }
    try {
      // Make an Axios POST request to your API endpoint
      const response = await axios.post('/api_create_package', {
        packages: packages
      });

      if (response.data.success) {
        // Handle a successful upload (e.g., redirect to another page)
        console.log('Successful upload');
      } else {
        // Handle a failed upload (e.g., show an error message)
        console.log('Failed upload');
      }
    } catch (error) {
      // Handle any network or server error
      console.error('An error occurred:', error);
    }
  };

  const addPackage = () => {
    setPackages((prev) => [...prev, { name: '', version: '', file: null, isSecret: false }]);
  };

  return (
    <div className="p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4">Multiple Package Upload</h1>
      <form onSubmit={handleSubmit}>
        {packages.map((pkg, idx) => (
          <div key={idx} className="mb-4">
            <div className="mb-2">
              <label htmlFor={`name-${idx}`} className="block text-sm font-medium text-gray-600">
                Name:
              </label>
              <input
                type="text"
                id={`name-${idx}`}
                value={pkg.name}
                onChange={(e) => {
                  const newPackages = [...packages];
                  newPackages[idx].name = e.target.value;
                  setPackages(newPackages);
                }}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor={`version-${idx}`} className="block text-sm font-medium text-gray-600">
                Version:
              </label>
              <input
                type="text"
                id={`version-${idx}`}
                value={pkg.version}
                onChange={(e) => {
                  const newPackages = [...packages];
                  newPackages[idx].version = e.target.value;
                  setPackages(newPackages);
                }}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor={`file-${idx}`} className="block text-sm font-medium text-gray-600">
                Choose zipped file:
              </label>
              <input
                type="file"
                id={`file-${idx}`}
                onChange={(e) => {
                  const newPackages = [...packages];
                  newPackages[idx].file = e.target.value;
                  setPackages(newPackages);
                }}
                className="mt-1 p-2 w-full border rounded-md"
                accept=".zip"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor={`isSecret-${idx}`} className="block text-sm font-medium text-gray-600">
                Secret? (Only you will be able to see)
              </label>
              <input
                type="checkbox"
                id={`isSecret-${idx}`}
                checked={pkg.isSecret}
                onChange={(e) => {
                  const newPackages = [...packages];
                  newPackages[idx].isSecret = e.target.checked;
                  setPackages(newPackages);
                }}
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addPackage}
          className="w-full bg-gray-300 text-black p-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 mb-4"
        >
          Add another
        </button>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Group upload/update
        </button>
      </form>
    </div>
  );
};

export default MultipleUpload;
