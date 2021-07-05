import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import Layaout from '../components/Layout/Layout';
import stolat from '../../static/img/stolat.png';
import urodziny from '../../static/audio/urodziny.mp3';
import QuizInput from '../components/QuizInput/QuizInput';
import { unlockQuiz } from '../redux/actions';

const LandingPage = () => {
  const dispatch = useDispatch();

  return (
    <Layaout>
      <audio controls autoPlay>
        <source src={urodziny} />
      </audio>
      <StolatImage src={stolat} alt="sto lat!" />
      <QuizInput onCorrectAnswer={() => dispatch(unlockQuiz())} answer="3214789" />
    </Layaout>
  );
};

const StolatImage = styled.img`
  width: 100%;
`;

LandingPage.propTypes = {};

export default LandingPage;
