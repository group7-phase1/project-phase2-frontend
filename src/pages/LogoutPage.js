import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the token from sessionStorage
    sessionStorage.removeItem('authToken');
    
    // Redirect to the login page
    navigate('/login');
  }, [navigate]);

  // Optionally, return a message or a spinner while the redirect is happening
  return <div>Logging out...</div>;
};

export default Logout;
