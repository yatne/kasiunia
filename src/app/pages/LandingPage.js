import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import Layaout from '../components/Layout/Layout';
import stolat from '../../static/img/stolat.png';
import urodziny from '../../static/audio/urodziny.mp3';

const LandingPage = () => {
  const isAuthorized = useSelector((state) => state.authorized);

  return (
    <Layaout>
      <audio controls autoPlay>
        <source src={urodziny} />
      </audio>
      <StolatImage src={stolat} alt="sto lat!" />
      {isAuthorized && (<div>Bingo!</div>)}
    </Layaout>
  );
};

const StolatImage = styled.img`
  width: 100%;
`;

LandingPage.propTypes = {};

export default LandingPage;
