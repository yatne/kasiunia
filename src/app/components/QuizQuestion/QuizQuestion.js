import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuizInput from '../QuizInput/QuizInput';

const QuizQuestion = ({
  question, answer, onCorrectAnswer, onlyNumbers, singular, correct, answers,
}) => {
  let style = 'border: 1px solid black';
  if (correct) {
    style = 'border: 1px solid green';
  }
  if (singular) {
    style = 'box-shadow: 1px 2px #dddddd';
  }

  return (
    <QuestionContainer borderStyle={style}>
      <Question>{question}</Question>
      <QuizInput
        onCorrectAnswer={(correctAnswer) => onCorrectAnswer(correctAnswer)}
        answer={answer}
        answers={answers}
        onlyNumbers={onlyNumbers}
        questionId={question}
      />
    </QuestionContainer>
  );
};

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
  margin: 30px;
  border-radius: 2px;
  ${(props) => props.borderStyle};
`;

const Question = styled.div`
  display: block;
  margin-right: 20px;
`;

QuizQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string,
  onCorrectAnswer: PropTypes.func.isRequired,
  onlyNumbers: PropTypes.bool,
  singular: PropTypes.bool,
  correct: PropTypes.bool,
  answers: PropTypes.arrayOf(PropTypes.string),
};

QuizQuestion.defaultProps = {
  answer: '',
  onlyNumbers: false,
  singular: false,
  correct: false,
  answers: [],
};

export default QuizQuestion;
