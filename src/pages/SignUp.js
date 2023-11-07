import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

import { useNavigate, Redirect, Link } from 'react-router-dom'; // Import useNavigate


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [groupName, setGroupName] = useState(''); // Add state for group name
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("in handlesubmit")

    try {
      const response = await axios.post('/api_register', {
        username: username,
        password: password,
        admin: isAdmin
      });
      console.log(response.status)

      if (response.data.success) {
        console.log('Registration successful');
        alert("Registration successful")
        navigate('/login');
        // Optionally, redirect to the login page or show a success message
      } else {
        alert("Registration failed: " + response.data.message)
        console.log('Registration failed');
      }
    } catch (error) {
      alert("Registration failed: " + error)
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="groupName" className="block text-sm font-medium text-gray-600">
              Group Name (optional):
            </label>
            <input
              type="text"
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Sign Up
          </button>
          <div className="mt-4">
            {/* Checkbox for admin mode */}
            <label className="block text-sm font-medium text-gray-600">
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={() => setIsAdmin(!isAdmin)}
                className="mr-2"
              />
              Admin Mode
            </label>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p>
            
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
