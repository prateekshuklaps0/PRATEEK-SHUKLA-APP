// ********** Private Route ****************
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";

// Libraries *******************************
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Pages ***********************************
import HomePage from "../Pages/HomePage";
import LogInPage from "../Pages/LogInPage";
import PageNotFound from "../Pages/PageNotFound";

// Main Function ***************************
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}
export default AllRoutes;
