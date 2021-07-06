import React, { useState } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';

import stolat from '../../../static/img/stolat.png';
import kwiaty from '../../../static/img/kwiaty.jpeg';
import kasiakasia from '../../../static/img/kasiakasia.png';
import ptasiemleczko from '../../../static/img/ptasie-mleczko.png';
import urodziny from '../../../static/audio/urodziny.mp3';

import { unlockQuiz } from '../../redux/actions';
import './landingPage.scss';

const LandingPage = () => {
  const dispatch = useDispatch();
  const [played, setPlayed] = useState(false);
  const [showBelowFold, setShowBelowFold] = useState(false);

  const handlePlay = (bool) => {
    const timeout = bool ? 5000 : 0;
    setPlayed(bool);
    setTimeout(() => {
      setShowBelowFold(bool);
    }, timeout);
  };

  return (
    <Layout>
      <audio className="audio-player" controls autoPlay loop onPlay={() => handlePlay(true)} onPause={() => handlePlay(false)}>
        <source src={urodziny} />
      </audio>
      <div className={`landing-page${!played ? ' hidden' : ''}`}>
        <StolatImage src={stolat} alt="sto lat!" />
        <KwiatyImage src={kwiaty} alt="kwaty" />
        <KasiaKasiaImage src={kasiakasia} alt="uśmiechnięta młoda dziewczyna" />
        <PtasieMleczkoImage src={ptasiemleczko} alt="ptasie mleczko" />
      </div>
      <div className={showBelowFold ? 'landing-page-below-fold' : 'display-none'}>
        <QuizQuestion question="odblokuj quiz!: " onCorrectAnswer={() => dispatch(unlockQuiz())} answer="3214789" onlyNumbers singular />
        <HiddenHint>tak jak telefon.</HiddenHint>
      </div>
    </Layout>
  );
};

const HiddenHint = styled.div`
  position: absolute;
  bottom: 33px;
  left: 173px;
  color: white;
`;

const StolatImage = styled.img`
  width: 100%;
  z-index: 2;
  max-width: 1300px;
`;

const KwiatyImage = styled.img`
  height: 1000px;
  margin-top: -450px;
  box-shadow: 1px 2px #dddddd;
  margin-bottom: 30px;
  border-radius: 2px;
`;

const KasiaKasiaImage = styled.img`
  width: 485px;
  margin-top: -544px;
  margin-left: 600px;
`;

const PtasieMleczkoImage = styled.img`
  width: 400px;
  margin-top: -390px;
  margin-right: 600px;
`;

LandingPage.propTypes = {};

export default LandingPage;
