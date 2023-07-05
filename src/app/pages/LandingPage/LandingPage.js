import React, { useState } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';

import stolat from '../../../static/img/stolat.png';
import kwiaty from '../../../static/img/kwiaty.jpeg';
import kasiakasia from '../../../static/img/kasiakasia.png';
import ptasiemleczko from '../../../static/img/ptasie-mleczko.png';
import thirtyTwo from '../../../static/img/32.png';
import zozole from '../../../static/img/zozole.png';
import urodziny from '../../../static/audio/urodziny.mp3';

import { unlockGame } from '../../redux/actions';
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
        <Frame>
          <ImagesWrapper>
            <StolatImage src={stolat} alt="sto lat!" />
            <ThirtyTwoImage src={thirtyTwo} alt="32" />
            <SecondThirtyTwoImage src={thirtyTwo} alt="32" />
            <ThirdThirtyTwoImage src={thirtyTwo} alt="32" />
            <KwiatyImage src={kwiaty} alt="kwaty" />
            <KasiaKasiaImage src={kasiakasia} alt="uśmiechnięta młoda dziewczyna" />
            <PtasieMleczkoImage src={ptasiemleczko} alt="ptasie mleczko" />
            <ZozoleImage src={zozole} alt="zozole" />
            <Solution> kolimator </Solution>
          </ImagesWrapper>
        </Frame>
      </div>
      <div className={showBelowFold ? 'landing-page-below-fold' : 'display-none'}>
        <QuizQuestion question="hasło: " onCorrectAnswer={() => dispatch(unlockGame())} answer="kolimator" singular />
      </div>
    </Layout>
  );
};

const Frame = styled.div`
  background: cyan;
  z-index: -2;
  padding: 20px;
  animation-name: colorchange;
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const ImagesWrapper = styled.div`
  position: relative;
  max-height: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StolatImage = styled.img`
  width: 100%;
  z-index: 2;
  max-width: 1300px;
  margin-top: 50px;
  animation-name: title-animation;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  position: absolute;
  top: 0;
`;

const ThirtyTwoImage = styled.img`
  top: 200px;
  margin-left: -500px;
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: 2;
  animation-name: crazy-2;
  animation-duration: 9s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier();
`;

const SecondThirtyTwoImage = styled.img`
  position: absolute;
  top: 100px;
  margin-left: 500px;
  z-index: 2;
  width: 80px;
  height: 80px;
  animation-name: crazy;
  animation-duration: 9s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier();
`;

const ThirdThirtyTwoImage = styled.img`
  position: absolute;
  top: 100px;
  margin-left: 500px;
  z-index: 2;
  width: 80px;
  height: 80px;
  animation-name: crazy-3;
  animation-duration: 9s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier();
`;

const KwiatyImage = styled.img`
  top: 0;
  height: 1000px;
  margin-top: -80px;
  box-shadow: 1px 2px #dddddd;
  margin-bottom: 30px;
  border-radius: 2px;
  z-index: -2;
`;

const KasiaKasiaImage = styled.img`
  width: 485px;
  margin-top: -544px;
  margin-left: 600px;
  animation-name: spin;
  animation-duration: 10000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const PtasieMleczkoImage = styled.img`
  position: absolute;
  width: 400px;
  top: 440px;
  left: 60px;
  animation-name: myOrbit;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const ZozoleImage = styled.img`
  position: absolute;
  transform: rotate(45deg);
  height: 400px;
  left: -300px;
  top: 850px;
  animation-name: zozole;
  animation-duration: 8000ms;
  animation-iteration-count: infinite;
`;

const Solution = styled.div`
  position: absolute;
  bottom: 0;
  margin-left: 650px;
  z-index: -1;
  color: #78a2b0;
`;

LandingPage.propTypes = {};

export default LandingPage;
