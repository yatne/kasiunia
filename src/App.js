import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars
import styles from './styles/global.scss';

import Navigation from './app/components/Navigation/Navigation';
import LandingPage from './app/pages/LandingPage';
import DesktopOnlyPage from './app/pages/DesktopOnlyPage';
import QuizPage from './app/pages/QuizPage';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <OnDesktopOnly>
        <Switch>
          <Route path="/quiz">
            <QuizPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </OnDesktopOnly>
      <OnMobileOnly>
        <DesktopOnlyPage />
      </OnMobileOnly>
    </Router>
  );
}

const OnDesktopOnly = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;

const OnMobileOnly = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
`;
