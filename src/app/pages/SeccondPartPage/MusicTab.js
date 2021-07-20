import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FINAL_FINAL_TAB, MUSIC_TAB } from '../../redux/constants';
import { setQuizStage, unlockTab } from '../../redux/actions';
import m1 from '../../../static/img/math/1.png';
import m2 from '../../../static/img/math/2.png';
import m3 from '../../../static/img/math/3.png';
import m4 from '../../../static/img/math/4.png';
import m5 from '../../../static/img/math/5.png';
import m6 from '../../../static/img/math/6.png';

import MathQuestion from '../../components/QuizQuestion/MathQuestion';

const MusicTab = () => {
  const dispatch = useDispatch();
  const stage = useSelector((state) => state.quizStages[MUSIC_TAB]);
  const unlockedTabs = useSelector((state) => state.unlockedTabs);

  const handleCorrectAnswer = (questionNr) => {
    if (stage === questionNr - 1) {
      dispatch(setQuizStage(MUSIC_TAB, questionNr));
    }
    if (questionNr === 1) {
      dispatch(unlockTab(FINAL_FINAL_TAB, unlockedTabs));
    }
  };

  return (
    <TabContainer>
      <Header>Rozwiąż równania</Header>
      <div>
        <MathQuestion
          image={m1}
          onCorrectAnswer={() => handleCorrectAnswer(1)}
          answer="2"
          questionId="m1"
          correct={stage >= 1}
        />
        { stage >= 1 && (
          <MathQuestion
            image={m2}
            onCorrectAnswer={() => handleCorrectAnswer(2)}
            answer="8"
            questionId="m2"
            correct={stage >= 2}
          />
        )}
        { stage >= 2 && (
          <MathQuestion
            image={m3}
            onCorrectAnswer={() => handleCorrectAnswer(3)}
            answer="0"
            questionId="m3"
            correct={stage >= 3}
          />
        )}
        { stage >= 3 && (
          <MathQuestion
            image={m4}
            onCorrectAnswer={() => handleCorrectAnswer(4)}
            answer="7"
            questionId="m4"
            correct={stage >= 4}
          />
        )}
        { stage >= 4 && (
          <MathQuestion
            image={m5}
            onCorrectAnswer={() => handleCorrectAnswer(5)}
            answer="9"
            questionId="m5"
            correct={stage >= 5}
          />
        )}
        { stage >= 5 && (
          <MathQuestion
            image={m6}
            onCorrectAnswer={() => handleCorrectAnswer(6)}
            answer="1"
            questionId="m6"
            correct={stage >= 6}
          />
        )}
      </div>
    </TabContainer>
  );
};

const Header = styled.h2`
  text-align: center;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
`;

const TabContainer = styled.div`
  display: block;
`;

export default MusicTab;
