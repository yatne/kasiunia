import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Navigation from './app/components/Navigation/Navigation';
import LandingPage from './app/pages/LandingPage';
import DesktopOnlyPage from './app/pages/DesktopOnlyPage';
import QuizPage from './app/pages/QuizPage';
import reducer from './app/redux/reducer';
// eslint-disable-next-line no-unused-vars
import styles from './styles/global.scss';

export default function App() {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
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
    </Provider>
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
