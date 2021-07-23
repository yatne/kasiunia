import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FINAL_ROUND_TAB } from '../../redux/constants';
import { setQuizStage } from '../../redux/actions';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';
import GeoQuestion from '../../components/GeoQuestion/GeoQuestion';

const FinalRoundTab = () => {
  const dispatch = useDispatch();
  const stage = useSelector((state) => state.quizStages[FINAL_ROUND_TAB]);
  const answerOne = useSelector((state) => state.quizAnswers['Zdobądź hasło od naszych przyjaciół']);

  const handleCorrectAnswer = (questionNr, correctAnswer = '') => {
    if (stage === 0 && questionNr === 1) {
      dispatch(setQuizStage(FINAL_ROUND_TAB, questionNr));
    }
    if (stage === 1 && questionNr === 2) {
      if (answerOne !== correctAnswer) {
        dispatch(setQuizStage(FINAL_ROUND_TAB, questionNr));
        setTimeout(() => {
          dispatch(setQuizStage(FINAL_ROUND_TAB, 3));
        }, 5000);
      }
    }
  };

  return (
    <TabContainer>
      <Header>
        Pozdrawiam
      </Header>
      <div>
        <QuizQuestion
          question="Zdobądź hasło od naszych przyjaciół"
          onCorrectAnswer={() => handleCorrectAnswer(1)}
          correct={stage >= 1}
          answers={['szczurowo', 'tykoczing', 'tykoching']}
        />
        { stage >= 1 && (
          <QuizQuestion
            question="Zdobądź hasło od naszych drugich przyjaciół"
            onCorrectAnswer={(correctAnswer) => handleCorrectAnswer(2, correctAnswer)}
            answers={['szczurowo', 'tykoczing', 'tykoching']}
            correct={stage >= 2}
          />
        )}
        { stage === 2 && (
          <QuizQuestion
            question="Zdobądź hasło od naszych trzecich przyjaciół"
            onCorrectAnswer={() => handleCorrectAnswer(3)}
            answer="1dasgadrg45g4fdbs2"
            correct={stage >= 3}
          />
        )}
        { stage === 3 && (
          <GeoQuestion
            correct
            question="Żartowałem, przecież nie mamy trzecich przyjaciół! Zajrzyj do piekarnika."
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

export default FinalRoundTab;
