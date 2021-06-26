import React from 'react';
import styled from 'styled-components';

import Layaout from '../components/Layout/Layout';
import stolat from '../../static/img/stolat.png';
import urodziny from '../../static/audio/urodziny.mp3';

const LandingPage = () => (
  <Layaout>
    <audio controls autoPlay>
      <source src={urodziny} />
    </audio>
    <StolatImage src={stolat} alt="sto lat!" />
  </Layaout>
);

const StolatImage = styled.img`
  width: 100%;
`;

LandingPage.propTypes = {};

export default LandingPage;
