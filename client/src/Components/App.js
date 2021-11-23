import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import SurveyNew from "./SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
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
  }
}

export default connect(null, actions)(App);
