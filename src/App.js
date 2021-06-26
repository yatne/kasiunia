import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import styles from './styles/global.scss';

import Navigation from './app/components/Navigation/Navigation';
import LandingPage from './app/pages/LandingPage';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <div>
        <Switch>
          <Route path="/home">
            <div>
              Home
            </div>
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
