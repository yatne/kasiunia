import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setIsbnPart, setQuizStage } from '../../redux/actions';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import FillQuestion from '../QuizQuestion/FillQuestion';
import AudioQuestion from '../QuizQuestion/AudioQuestion';
import MultipleChoiceQuestion from "../QuizQuestion/MultipleChoiceQuestion";

const Quiz = ({ quizId, questions }) => {
  const dispatch = useDispatch();
  const stage = useSelector((state) => state.quizStages[quizId]);

  const handleCorrectAnswer = (questionNr) => {
    if (stage === questionNr - 1) {
      dispatch(setQuizStage(quizId, questionNr));
    }
    if (stage === 1) {
      dispatch(setIsbnPart(quizId, '978'));
    }
  };

  return (
    <div>
      {questions.map((question, index) => {
        if (stage < index) {
          return null;
        }
        if (question.type === 'fill') {
          return (
            <FillQuestion
              texts={question.texts}
              blanks={question.blanks}
              onAllCorrect={() => handleCorrectAnswer(index + 1)}
              correct={stage > index}
            />
          );
        }
        if (question.type === 'multiple') {
          return (
            <MultipleChoiceQuestion
              question={question.question}
              answerConfig={question.answerConfig}
              onCorrectAnswer={() => handleCorrectAnswer(index + 1)}
              correct={stage > index}
            />
          );
        }
        if (question.type === 'audio') {
          return (
            <AudioQuestion
              question={question.question}
              audio={question.audio}
              answer={question.answer}
              onCorrectAnswer={() => handleCorrectAnswer(index + 1)}
              correct={stage > index}
            />
          );
        }
        return (
          <QuizQuestion
            question={question.question}
            onCorrectAnswer={() => handleCorrectAnswer(index + 1)}
            correct={stage > index}
            answer={question.answer}
            answers={question.answers}
            image={question.image}
          />
        );
      })}
    </div>
  );
};

Quiz.propTypes = {
  quizId: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Quiz;
