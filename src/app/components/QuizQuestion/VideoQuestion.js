import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuizInput from '../QuizInput/QuizInput';

const VideoQuestion = ({ question, answer, onCorrectAnswer, correct }) => {
  let style = 'border: 1px solid black';
  if (correct) {
    style = 'border: 2px solid green';
  }

  return (
    <QuestionContainer borderStyle={style}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/iX9TmRZHZdQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Question>{question}</Question>
      <QuizInput
        onCorrectAnswer={(correctAnswer) => onCorrectAnswer(correctAnswer)}
        answer={answer}
        questionId={question}
      />
    </QuestionContainer>
  );
};

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

VideoQuestion.propTypes = { question: PropTypes.string,
  answer: PropTypes.string,
  onCorrectAnswer: PropTypes.func.isRequired,
  correct: PropTypes.bool };

VideoQuestion.defaultProps = { question: '',
  answer: '',
  correct: false };

export default VideoQuestion;
