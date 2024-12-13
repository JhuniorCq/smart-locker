import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Home } from "../pages/Home/Home";
import { Recommendations } from "../pages/Recommendations/Recommendations";
import { AlertHistory } from "../pages/AlertHistory/AlertHistory";
import { AlertDetails } from "../pages/AlertDetails/AlertDetails";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/alert-history" element={<AlertHistory />} />
      <Route path="/alert-details/:id" element={<AlertDetails />} />
      <Route path="/recommendations" element={<Recommendations />} />
    </Routes>
  );
};
