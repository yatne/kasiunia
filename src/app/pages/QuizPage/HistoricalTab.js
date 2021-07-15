import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';
import { GEOGRAPHIC_TAB, HISTORICAL_TAB } from '../../redux/constants';
import { setQuizStage, unlockTab } from '../../redux/actions';

const HistoricalTab = () => {
  const dispatch = useDispatch();
  const stage = useSelector((state) => state.quizStages[HISTORICAL_TAB]);
  const unlockedTabs = useSelector((state) => state.unlockedTabs);

  const handleCorrectAnswer = (questionNr) => {
    if (stage === questionNr - 1) {
      dispatch(setQuizStage(HISTORICAL_TAB, questionNr));
    }
    if (questionNr === 4) {
      dispatch(unlockTab(GEOGRAPHIC_TAB, unlockedTabs));
    }
  };

  return (
    <TabContainer>
      <Header>Test z wiedzy ogólnej oraz popkultury</Header>
      <div>
        <QuizQuestion
          question="Co tam?"
          onCorrectAnswer={() => handleCorrectAnswer(1)}
          correct={stage >= 1}
          answer="tak"
        />
        { stage >= 1 && (
          <QuizQuestion
            question="aa12sa"
            onCorrectAnswer={() => handleCorrectAnswer(2)}
            answer="12"
            correct={stage >= 2}
          />
        )}
        { stage >= 2 && (
          <QuizQuestion
            question="asgdsa"
            onCorrectAnswer={() => handleCorrectAnswer(3)}
            answer="12"
            correct={stage >= 3}
          />
        )}
        { stage >= 3 && (
          <QuizQuestion
            question="abfvbbba"
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

export default HistoricalTab;
