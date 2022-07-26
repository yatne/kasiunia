import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MultipleChoiceQuestion = ({ question, answerConfig, correct, onCorrectAnswer }) => {
  let style = 'border: 1px solid black';
  if (correct) {
    style = 'border: 2px solid green';
  }

  const checkIfInputCorrect = (label, value) => {
    const configValue = answerConfig.find((answer) => answer.label === label);
    return configValue.answer === undefined || configValue.answer === value;
  };

  const [options, setOptions] = useState(answerConfig.map((config) => ({ label: config.label,
    correct: checkIfInputCorrect(config.label, false) })));

  const handleChange = (e, label) => {
    const isChecked = e.target.checked;
    const newOptions = options.map((option) => {
      if (option.label === label) {
        return { label: option.label,
          correct: checkIfInputCorrect(label, isChecked) };
      } return option;
    });
    setOptions(newOptions);
    if (!newOptions.find((option) => option.correct === false)) {
      onCorrectAnswer();
    }
  };

  return (
    <QuestionContainer borderStyle={style}>
      <Question>{question}</Question>
      <AnswerContainer>
        {answerConfig.map((option) => (
          <Answer>
            <input id={option.label} type="checkbox" onChange={(e) => handleChange(e, option.label)} />
            <label htmlFor={option.label}>{option.label}</label>
          </Answer>
        ))}
      </AnswerContainer>
    </QuestionContainer>
  );
};

const Question = styled.div`
  display: block;
  width: 100%;
  margin-right: 20px;
  text-align: center;
`;

const AnswerContainer = styled.div`
  display: flex;
  margin: 20px;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Answer = styled.div`
  width: 45%;
  margin: 10px;

  label {
    margin-left: 5px;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  margin: 30px;
  border-radius: 2px;
  ${(props) => props.borderStyle};
`;

MultipleChoiceQuestion.propTypes = { question: PropTypes.string,
  answerConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCorrectAnswer: PropTypes.func.isRequired,
  correct: PropTypes.bool };

MultipleChoiceQuestion.defaultProps = { question: '',
  correct: false };

export default MultipleChoiceQuestion;
