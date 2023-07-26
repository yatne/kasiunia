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
import kawka from '../../../static/kawka.png';

import { unlockGame } from '../../redux/actions';
import './landingPage.scss';

const kawkaPlaces = [
  { maxWidth: '180px', top: '20px', left: '0', zIndex: '2' },
  { maxWidth: '140px', top: '10px', left: '10px', zIndex: '2' },
  { maxWidth: '180px', top: '200px', left: '840px', zIndex: '2' },
  { maxWidth: '160px', top: '600px', left: '440px', zIndex: '2' },
  { maxWidth: '50px', top: '200px', left: '40px', zIndex: '2' },
  { maxWidth: '1000px', top: '-100px', left: '40px', zIndex: '2' },
  {
    maxWidth: '100px', top: '30px', left: '40px', zIndex: '20000', fixed: true,
  },
  { maxWidth: '350px', top: '20px', left: '240px', zIndex: '1' },
  { maxWidth: '150px', top: '450px', left: '40px', zIndex: '0' },
  { maxWidth: '110px', top: '715px', left: '880px', zIndex: '1' },
];

const ghostPlaces = [
  { width: '150px', height: '290px', top: '100px', left: '340px' },
  { width: '50px', height: '120px', top: '510px', left: '90px' },
  { width: '50px', height: '500px', top: '770px', left: '910px' },
];

const LandingPage = () => {
  const dispatch = useDispatch();
  const [played, setPlayed] = useState(false);
  const [showBelowFold, setShowBelowFold] = useState(false);
  const [kawkaPlace, setKawkaPlace] = useState(0);

  const setNextKawkaPlace = () => {
    if (kawkaPlaces.length > kawkaPlace + 1) {
      setKawkaPlace(kawkaPlace + 1);
    } else {
      setKawkaPlace(100);
    }
  };

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
            <KawkaImage
              src={kawka}
              alt="kawka"
              onClick={setNextKawkaPlace}
              maxWidth={kawkaPlace <= 9 ? kawkaPlaces[kawkaPlace].maxWidth : '0'}
              top={kawkaPlace <= 9 ? kawkaPlaces[kawkaPlace].top : '0'}
              left={kawkaPlace <= 9 ? kawkaPlaces[kawkaPlace].left : '0'}
              zIndex={kawkaPlace <= 9 ? kawkaPlaces[kawkaPlace].zIndex : '0'}
              fixed={kawkaPlace <= 9 ? kawkaPlaces[kawkaPlace].fixed : '0'}
            />
            <KawkaGhost
              top={kawkaPlace >= 7 && kawkaPlace <= 9 ? ghostPlaces[kawkaPlace - 7].top : '0'}
              left={kawkaPlace >= 7 && kawkaPlace <= 9 ? ghostPlaces[kawkaPlace - 7].left : '0'}
              width={kawkaPlace >= 7 && kawkaPlace <= 9 ? ghostPlaces[kawkaPlace - 7].width : '0'}
              height={kawkaPlace >= 7 && kawkaPlace <= 9 ? ghostPlaces[kawkaPlace - 7].height : '0'}
              onClick={setNextKawkaPlace}
            />
            {kawkaPlace === 100 && (
              <Solution> kurka rurka </Solution>
            )}
            <KasiaKasiaImage src={kasiakasia} alt="uśmiechnięta młoda dziewczyna" />
            <PtasieMleczkoImage src={ptasiemleczko} alt="ptasie mleczko" />
            <ZozoleImage src={zozole} alt="zozole" />
          </ImagesWrapper>
        </Frame>
      </div>
      <div className={showBelowFold ? 'landing-page-below-fold' : 'display-none'}>
        <QuizQuestion question="hasło: " onCorrectAnswer={() => dispatch(unlockGame())} answer="kurka rurka" singular />
      </div>
    </Layout>
  );
};

const KawkaImage = styled.img`
  width: 100%;
  z-index: ${(props) => props.zIndex};
  max-width: ${(props) => props.maxWidth};
  margin-top: 50px;
  position: ${(props) => (props.fixed ? 'fixed' : 'absolute')};
  cursor: pointer;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: rotateZ(45deg);
  animation: kawka-animation 1s linear infinite;
`;

const KawkaGhost = styled.div`
  z-index: 1000;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Frame = styled.div`
  background: cyan;
  z-index: 0;
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
  z-index: 1;
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
  color: red;
`;

LandingPage.propTypes = {};

export default LandingPage;
