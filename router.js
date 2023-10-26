import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Grid from "./pages/Grid";
import IndividualPackage from "./pages/IndividualPackage";
import Login from "./pages/Login";
import UploadMultiplePackages from "./pages/UploadMultiplePackages";
import UploadOnePackage from "./pages/UploadOnePackage";

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
