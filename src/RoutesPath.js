import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

const RoutesPath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPath;
