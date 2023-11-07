import React from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Home from "./pages/HomePage";
import CreatePackage from "./pages/CreatePackagePage";
import MultipleUpload from "./pages/MultipleUploadPage";
import UpdatePackage from "./pages/UpdatePackagePage";
import PackageDetail from "./pages/PackageDetailsPage";
import SignUp from "./pages/SignUp";
import Settings from "./pages/Settings";
import Login from "./pages/LoginPage";
import Logout from './pages/LogoutPage';

import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const authToken = sessionStorage.getItem('authToken');
  console.log("in private route")
  return authToken ? children : <Navigate to="/login" replace />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/create-package" element={<PrivateRoute><CreatePackage /></PrivateRoute>} />
        <Route path="/multiple-upload" element={<PrivateRoute><MultipleUpload /></PrivateRoute>} />
        <Route path="/update-package" element={<PrivateRoute><UpdatePackage /></PrivateRoute>} />
        <Route path="/package-details" element={<PrivateRoute><PackageDetail /></PrivateRoute>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
