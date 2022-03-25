import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setIsbnPart, setQuizStage } from '../../redux/actions';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

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
      {questions.map((question, index) => (stage >= index ? (
        <QuizQuestion
          question={question.question}
          onCorrectAnswer={() => handleCorrectAnswer(index + 1)}
          correct={stage > index}
          answer={question.answer}
          answers={question.answers}
        />
      ) : null))}
    </div>
  );
};

Quiz.propTypes = {
  quizId: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Quiz;
