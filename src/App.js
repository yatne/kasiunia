import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styles from './styles/global.scss'

import Navigation from "./components/Navigation/Navigation";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <Router>
      <Navigation />
      <div>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
