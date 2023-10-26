import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importing Link to navigate to Update page

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the login logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
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
                    <Link
                    to="/grid">
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                        Login
                   
                    </button>
                    </Link>
                </form>
                <div className="mt-4 text-center">
                    <p>Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
