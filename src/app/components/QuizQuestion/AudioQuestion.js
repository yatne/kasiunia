import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuizInput from '../QuizInput/QuizInput';

const AudioQuestion = ({
  question, answer, onCorrectAnswer, correct, audio,
}) => {
  let style = 'border: 1px solid black';
  if (correct) {
    style = 'border: 2px solid green';
  }

  return (
    <QuestionContainer borderStyle={style}>
      <Audio className="audio-player" controls>
        <source src={audio} />
      </Audio>
      <Question>{question}</Question>
      <QuizInput
        onCorrectAnswer={(correctAnswer) => onCorrectAnswer(correctAnswer)}
        answer={answer}
        questionId={question}
      />
    </QuestionContainer>
  );
};

const Audio = styled.audio`
  margin: 0 20px 0 0;
  padding: 0;
`;

const Question = styled.div`
  display: block;
  margin-right: 20px;
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

AudioQuestion.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  onCorrectAnswer: PropTypes.func.isRequired,
  correct: PropTypes.bool,
  audio: PropTypes.string.isRequired,
};

AudioQuestion.defaultProps = {
  question: '',
  answer: '',
  correct: false,
};

export default AudioQuestion;
