import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setQuizStage } from '../../redux/actions';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import FillQuestion from '../QuizQuestion/FillQuestion';
import AudioQuestion from '../QuizQuestion/AudioQuestion';
import MultipleChoiceQuestion from '../QuizQuestion/MultipleChoiceQuestion';
import SuperSlideMeQuestion from '../QuizQuestion/SuperSlideMeQuestion';
import OrganiseOrderQuestion from '../QuizQuestion/OrganiseOrderQuestion';

const Quiz = ({ quizId, questions, onQuizFinished }) => {
  const dispatch = useDispatch();
  const stage = useSelector((state) => state.quizStages[quizId]);

  const handleCorrectAnswer = (questionNr) => {
    if (stage === questionNr - 1) {
      dispatch(setQuizStage(quizId, questionNr));
      if (stage === questions.length - 1) {
        onQuizFinished();
      }
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
        if (question.type === 'organise') {
          return (
            <OrganiseOrderQuestion
              question={question.question}
              correct={stage > index}
              onCorrectAnswer={() => handleCorrectAnswer(index + 1)}
              tags={question.tags}
            />
          );
        }
        if (question.type === 'superSlideMe') {
          return (
            <SuperSlideMeQuestion
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
            InnerHtml={question.InnerHtml}
          />
        );
      })}
    </div>
  );
};

Quiz.propTypes = { quizId: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onQuizFinished: PropTypes.func.isRequired };

export default Quiz;
