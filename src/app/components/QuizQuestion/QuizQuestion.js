import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuizInput from '../QuizInput/QuizInput';

const QuizQuestion = ({
  question, answer, onCorrectAnswer, onlyNumbers, singular,
}) => (
  <QuestionContainer singular={singular}>
    <Question>{question}</Question>
    <QuizInput onCorrectAnswer={onCorrectAnswer} answer={answer} onlyNumbers={onlyNumbers} />
  </QuestionContainer>
);

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  background-color: white;
  ${(props) => (props.singular ? 'box-shadow: 1px 2px #dddddd;' : 'border: 1px solid black')};
  margin: 30px;
  border-radius: 2px;
`;

const Question = styled.div`
  display: block;
  margin-right: 20px;
`;

QuizQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onCorrectAnswer: PropTypes.func.isRequired,
  onlyNumbers: PropTypes.bool,
  singular: PropTypes.bool,
};

QuizQuestion.defaultProps = {
  onlyNumbers: false,
  singular: false,
};

export default QuizQuestion;
