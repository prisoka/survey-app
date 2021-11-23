import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import SurveyNew from "./SurveyNew";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/surveys" element={<Dashboard />} />
            <Route path="/surveys/new" element={<SurveyNew />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
