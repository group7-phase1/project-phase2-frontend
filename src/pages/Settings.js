import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Settings() {
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);

  const handleDeleteAccount = () => {
    setConfirmationVisible(true);
  };

  const confirmDeleteAccount = () => {
    // Add your account deletion logic here
    // You may also want to log the user out and redirect them to a different page
    alert('Account deleted!'); // Replace with your logic
  };

  const cancelDeleteAccount = () => {
    setConfirmationVisible(false);
  };

  return (
    <div className="m-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      <div className="mb-4">
        {/* Your settings content can go here */}
      </div>
      <div style={{ position: 'absolute', top: '0', right: '0' }}>
        <Link to="/settings" className="ml-4 px-4 py-2 bg-gray-800 text-white rounded">Settings</Link>
      </div>
      <div className="mt-4">
        {isConfirmationVisible ? (
          <div>
            <p>Are you sure you want to delete your account?</p>
            <button onClick={confirmDeleteAccount} className="px-4 py-2 bg-red-500 text-white rounded mr-2">Confirm</button>
            <button onClick={cancelDeleteAccount} className="px-4 py-2 bg-gray-800 text-white rounded">Cancel</button>
          </div>
        ) : (
          <button onClick={handleDeleteAccount} className="px-4 py-2 bg-red-500 text-white rounded">Delete Account</button>
        )}
      </div>
    </div>
  );
}

export default Settings;
