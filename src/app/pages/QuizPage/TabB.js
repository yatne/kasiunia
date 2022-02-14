import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';
import { TAB_B } from '../../redux/constants';
import { setIsbnPart, setQuizStage } from '../../redux/actions';

const TabA = () => {
  const dispatch = useDispatch();
  const stage = useSelector((state) => state.quizStages[TAB_B]);

  const handleCorrectAnswer = (questionNr) => {
    if (stage === questionNr - 1) {
      dispatch(setQuizStage(TAB_B, questionNr));
    }
    if (stage === 1) {
      dispatch(setIsbnPart(TAB_B, '83'));
    }
  };

  return (
    <TabContainer>
      <Header>Test z wiedzy ogólnej oraz popkultury</Header>
      <div>
        <QuizQuestion
          question="joł joł joł"
          onCorrectAnswer={() => handleCorrectAnswer(1)}
          correct={stage >= 1}
          answer="Rubble"
        />
        { stage >= 1 && (
          <QuizQuestion
            question="Kt boku?"
            onCorrectAnswer={() => handleCorrectAnswer(2)}
            answer="Uran"
            correct={stage >= 2}
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

export default TabA;
