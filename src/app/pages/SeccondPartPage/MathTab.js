import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';
import { GENERAL_KNOWLEDGE_TAB, HISTORICAL_TAB } from '../../redux/constants';
import { setQuizStage, unlockTab } from '../../redux/actions';
import kasiakasia from '../../../static/img/kasiakasia.png';

const MathTab = () => {
  const dispatch = useDispatch();
  const stage = useSelector((state) => state.quizStages[GENERAL_KNOWLEDGE_TAB]);
  const unlockedTabs = useSelector((state) => state.unlockedTabs);

  const handleCorrectAnswer = (questionNr) => {
    if (stage === questionNr - 1) {
      dispatch(setQuizStage(GENERAL_KNOWLEDGE_TAB, questionNr));
    }
    if (questionNr === 4) {
      dispatch(unlockTab(HISTORICAL_TAB, unlockedTabs));
    }
  };

  return (
    <TabContainer>
      <Header>Test z wiedzy ogólnej oraz popkultury</Header>
      <div>
        <QuizQuestion
          question="Jak się nazywa najmłodszy piesek z Psiego Patrolu?"
          onCorrectAnswer={() => handleCorrectAnswer(1)}
          correct={stage >= 1}
          answer="Rubble"
          image={kasiakasia}
        />
        { stage >= 1 && (
          <QuizQuestion
            question="aasa"
            onCorrectAnswer={() => handleCorrectAnswer(2)}
            answer="12"
            correct={stage >= 2}
          />
        )}
        { stage >= 2 && (
          <QuizQuestion
            question="asa"
            onCorrectAnswer={() => handleCorrectAnswer(3)}
            answer="12"
            correct={stage >= 3}
          />
        )}
        { stage >= 3 && (
          <QuizQuestion
            question="abfa"
            onCorrectAnswer={() => handleCorrectAnswer(4)}
            answer="12"
            correct={stage >= 4}
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

export default MathTab;
