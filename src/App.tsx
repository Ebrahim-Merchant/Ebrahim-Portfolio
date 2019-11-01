import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/landing-page/landing-page.component";

const App: React.FC = () => {
  return (
    <div className="main">
      <Router>
        <Route path="/" component={LandingPage} />
      </Router>
    </div>
  );
};

export default App;
