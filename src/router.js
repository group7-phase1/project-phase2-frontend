import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import CreatePackage from "./pages/CreatePackagePage";
import MultipleUpload from "./pages/MultipleUploadPage";
import UpdatePackage from "./pages/UpdatePackagePage";
import PackageDetail from "./pages/PackageDetailsPage";
import Grid from "./pages/Grid";
import SignUp from "./pages/SignUp";
import Settings from "./pages/Settings";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/create-package" element={<CreatePackage />} />
        <Route path="/multiple-upload" element={<MultipleUpload />} />
        <Route path="/update-package" element={<UpdatePackage />} />
        <Route path="/package-details" element={<PackageDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
