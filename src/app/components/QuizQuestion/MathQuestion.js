import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuizInput from '../QuizInput/QuizInput';

const MathQuestion = ({
  answer, onCorrectAnswer, correct, image, questionId,
}) => {
  let style = 'border: 1px solid black';
  if (correct) {
    style = 'border: 2px solid green';
  }

  return (
    <QuestionContainer borderStyle={style}>
      <QuestionImage src={image} alt="some math" />
      <QuizInput
        onCorrectAnswer={(correctAnswer) => onCorrectAnswer(correctAnswer)}
        answer={answer}
        onlyNumbers
        questionId={questionId}
      />
    </QuestionContainer>
  );
};

const QuestionImage = styled.img`
  height: 100%;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  margin: 30px;
  border-radius: 2px;
  ${(props) => props.borderStyle};
`;

MathQuestion.propTypes = {
  answer: PropTypes.string,
  onCorrectAnswer: PropTypes.func.isRequired,
  correct: PropTypes.bool,
  image: PropTypes.string,
  questionId: PropTypes.string.isRequired,
};

MathQuestion.defaultProps = {
  answer: '',
  correct: false,
  image: null,
};

export default MathQuestion;
