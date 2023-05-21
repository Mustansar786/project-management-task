import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainSelectionPage } from "../pages";

const Authentication = () => {
      return <Navigate to="/main"> </Navigate>;
    
  };

export default function Router() {
  return (
    <Routes>
      <Route>
      <Route path="/" element={<Authentication />} />
        <Route path="/main" element={<MainSelectionPage />} />
      </Route>
    </Routes>
  );
}