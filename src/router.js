import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import CreatePackage from "./pages/CreatePackagePage";
import Login from "./pages/LoginPage";
import MultipleUpload from "./pages/MultipleUploadPage";
import UpdatePackage from "./pages/UpdatePackagePage";
import PackageDetail from "./pages/PackageDetailsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-package" element={<CreatePackage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/multiple-upload" element={<MultipleUpload />} />
        <Route path="/update-package" element={<UpdatePackage />} />
        <Route path="/package-details" element={<PackageDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
