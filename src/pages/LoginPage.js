import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

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
        // Store the token securely
        sessionStorage.setItem('authToken', response.data.token);
        alert("Login successful")
        console.log('Login successful');
        navigate('/');
        
        // Optionally, redirect to another page or set a global auth state here
      } else {
          alert("Login failed: " + response.data.message)
          console.log('Login failed');
      }
    
    } catch (error) {
      // Handle any network or server error
      console.error('An error occurred:' + error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="text" className="block text-sm font-medium text-gray-600">Email:</label>
            <input 
              type="text"
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
            Login
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
          <p>Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a></p>
        </div>
      
      </div>

    </div>
  );
};

export default Login;
