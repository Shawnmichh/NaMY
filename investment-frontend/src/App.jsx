import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InvestmentsPage from "./pages/InvestmentsPage";
import LandingPage from "./pages/Landingpage";
import DataPage from "./pages/Data";
import LoginPage from "./pages/LoginPage";
import FeedbackPage from "./pages/FeedbackPage";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/investments" element={<InvestmentsPage />} />
      <Route path="/data" element={<DataPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
};

export default App;
