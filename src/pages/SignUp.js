import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        // Make an Axios POST request to your API endpoint
        const response = await axios.post('/api_login', {
          username: email, // Use the name that matches your API's request body
          password: password,
          admin: isAdmin
        });
  
        if (response.data.success) {
          // Handle a successful login (e.g., redirect to another page)
          console.log('Login successful');
        } else {
          // Handle a failed login (e.g., show an error message)
          console.log('Login failed');
        }
      } catch (error) {
        // Handle any network or server error
        console.error('An error occurred:', error);
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
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
          <p>Already have an account? <a href="/" className="text-blue-600 hover:underline">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
