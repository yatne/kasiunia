import React from 'react';
import PropTypes from 'prop-types';
import Layaout from "../components/Layout/Layaout";
import stolat from "../static/img/stolat.png";
import urodziny from "../static/audio/urodziny.mp3";

const LandingPage = () => {
  return (
    <Layaout>
      <audio controls autoplay>
        <source src={urodziny} />
      </audio>
      <img src={stolat} />
    </Layaout>
  )
}

LandingPage.propTypes = {}

export default LandingPage;