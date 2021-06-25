import React from 'react';
import Layaout from '../components/Layout/Layaout';
import stolat from '../static/img/stolat.png';
import urodziny from '../static/audio/urodziny.mp3';

const LandingPage = () => (
  <Layaout>
    <audio controls autoPlay>
      <source src={urodziny} />
    </audio>
    <img src={stolat} alt="sto lat!" />
  </Layaout>
);

LandingPage.propTypes = {};

export default LandingPage;
