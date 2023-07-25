import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuizInput from '../QuizInput/QuizInput';

const QuizQuestion = ({
  question, answer, onCorrectAnswer, onlyNumbers, singular, correct, answers, image, InnerHtml,
}) => {
  let style = 'border: 1px solid black';
  if (correct) {
    style = 'border: 2px solid green';
  }
  if (singular) {
    style = 'box-shadow: 1px 2px #dddddd';
  }
  const tableId = answers ? answers[0] : '';

  return (
    <QuestionContainer borderStyle={style}>
      {image && <QuestionImage src={image} alt={question} />}
      <InnerContainer>
        <Question>
          {question}
          {InnerHtml ? <InnerHtml /> : ''}
        </Question>
        <QuizInput
          onCorrectAnswer={(correctAnswer) => onCorrectAnswer(correctAnswer)}
          answer={answer}
          answers={answers}
          onlyNumbers={onlyNumbers}
          questionId={question + answer + tableId}
        />
      </InnerContainer>
    </QuestionContainer>
  );
};

const QuestionImage = styled.img`
  max-width: 50%;
  margin-bottom: 30px;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  margin: 30px;
  border-radius: 2px;
  ${(props) => props.borderStyle};
`;

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
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
  image: PropTypes.string,
  InnerHtml: PropTypes.string,
};

QuizQuestion.defaultProps = {
  answer: '',
  onlyNumbers: false,
  singular: false,
  correct: false,
  answers: [],
  image: null,
  InnerHtml: null,
};

export default QuizQuestion;
