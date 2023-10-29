// import React, {useState} from 'react';
// import { Link } from 'react-router-dom';  // Importing Link to navigate to Update page
// import axios from 'axios'; // Import Axios
// const CreatePackage = () => {
//     const [name, setName] = useState('');
//     const [version, setVersion] = useState('');
//     const [file, setFile] = useState(null); // Initialize file as null

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Handle the package creation logic here
//         // You can access file, name, and version here
    
//     try {
//         // Make an Axios POST request to your API endpoint
//         const response = await axios.post('/api_create_package', {
//           name: name, // Use the name that matches your API's request body
//           version: version,
//           file: file
//         });
  
//         if (response.data.success) {
//           // Handle a successful login (e.g., redirect to another page)
//           console.log('Successful upload');
//         } else {
//           // Handle a failed login (e.g., show an error message)
//           console.log('Failed upload');
//         }
//       } catch (error) {
//         // Handle any network or server error
//         console.error('An error occurred:', error);
//       }

//     };
//     return (
//         <div className="p-8 bg-white shadow-md rounded-lg">
//             <h1 className="text-xl font-bold mb-4">Create a package</h1>
//             <p>Fill in information to upload the initial package.</p>
//             <form onSubmit={handleSubmit}
//                 className="mt-4">
//                 <div className="mb-4">
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-600">
//                         Name:
//                     </label>
//                     <input type="text" id="name"
//                         value={name}
//                         onChange={
//                             (e) => setName(e.target.value)
//                         }
//                         className="mt-1 p-2 w-full border rounded-md"
//                         required/>
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="version" className="block text-sm font-medium text-gray-600">
//                         Version:
//                     </label>
//                     <input type="text" id="version"
//                         value={version}
//                         onChange={
//                             (e) => setVersion(e.target.value)
//                         }
//                         className="mt-1 p-2 w-full border rounded-md"
//                         required/>
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="file" className="block text-sm font-medium text-gray-600">
//                         Choose zipped file:
//                     </label>
//                     <input type="file" id="file"
//                         onChange={
//                             (e) => setFile(e.target.files[0])
                            
//                         }
//                         // Capture the selected file
//                         className="mt-1 p-2 w-full border rounded-md"
//                         accept=".zip"
//                         required
//                     />
//                 </div>

//                 <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
//                     Create new package
//                 </button>

//             </form>
//         </div>
//     );

//  };
// export default CreatePackage;

import React, { useState } from 'react';
import axios from 'axios';

const CreatePackage = () => {
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');
  const [file, setFile] = useState(null);
  const [isSecret, setIsSecret] = useState(false); // Initialize isSecret as false

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('version', version);
      formData.append('file', file);
      formData.append('isSecret', isSecret); // Include the isSecret value

      // Make an Axios POST request to your API endpoint
      const response = await axios.post('/api_create_package', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
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

  return (
    <div className="p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4">Create a package</h1>
      <p>Fill in information to upload the initial package.</p>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="version" className="block text-sm font-medium text-gray-600">
            Version:
          </label>
          <input
            type="text"
            id="version"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block text-sm font-medium text-gray-600">
            Choose zipped file:
          </label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md"
            accept=".zip"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            <input
              type="checkbox"
              checked={isSecret}
              onChange={() => setIsSecret(!isSecret)}
              className="mr-2"
            />
            Secret? (Only members of your group will be able to see)
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Create new package
        </button>
      </form>
    </div>
  );
};

export default CreatePackage;
