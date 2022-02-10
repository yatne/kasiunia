import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';
import { TAB_A } from '../../redux/constants';
import { setQuizStage } from '../../redux/actions';
import wendy from '../../../static/img/w.jpeg';

const TabA = () => {
  const dispatch = useDispatch();
  const stage = useSelector((state) => state.quizStages[TAB_A]);

  const handleCorrectAnswer = (questionNr) => {
    if (stage === questionNr - 1) {
      dispatch(setQuizStage(TAB_A, questionNr));
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
            question="Która planeta wiruje na boku?"
            onCorrectAnswer={() => handleCorrectAnswer(2)}
            answer="Uran"
            correct={stage >= 2}
          />
        )}
        { stage >= 2 && (
          <QuizQuestion
            question="Jak ma na nazwisko właścicielka sklepu w Pontypandy?"
            onCorrectAnswer={() => handleCorrectAnswer(3)}
            answer="Price"
            correct={stage >= 3}
          />
        )}
        { stage >= 3 && (
          <QuizQuestion
            question="Czego boi się Skye?"
            onCorrectAnswer={() => handleCorrectAnswer(4)}
            answer="Orłów"
            correct={stage >= 4}
          />
        )}
        { stage >= 4 && (
          <QuizQuestion
            question="Kto to jest?"
            onCorrectAnswer={() => handleCorrectAnswer(5)}
            answer="Wendy"
            correct={stage >= 5}
            image={wendy}
          />
        )}
        { stage >= 5 && (
          <QuizQuestion
            question="Jak się nazywa bratanek burmistrza Humdingera?"
            onCorrectAnswer={() => handleCorrectAnswer(6)}
            answer="Harold"
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

export default TabA;
