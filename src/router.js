import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Grid from "./pages/grid";
import IndividualPackage from "./pages/individualPackage";
import Login from "./pages/login";
import UploadMultiplePackages from "./pages/uploadMultiplePackages";
import UploadOnePackage from "./pages/uploadOnePackage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Grid />} />
        <Route path="/individual-package" element={<IndividualPackage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload-multiple-packages" element={<UploadMultiplePackages />} />
        <Route path="/upload-one-package" element={<UploadOnePackage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
