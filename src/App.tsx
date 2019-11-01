import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import LandingPage from "./pages/landing-page/landing-page.component";

const App: React.FC = () => {
  return (
    <div className="main">
  <Router>
    <div>
      <Route path="/" component={LandingPage} />
    </div>
  </Router>
    </div>
  );
};

export default App;
