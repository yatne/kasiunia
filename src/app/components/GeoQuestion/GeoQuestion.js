import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GeoQuestion = ({ question, correct }) => (
  <QuestionContainer correct={correct}>
    {question}
  </QuestionContainer>
);

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  background-color: white;
  margin: 30px;
  border-radius: 2px;
  border: 2px solid ${(props) => (props.correct ? 'green' : 'black')};
  background: ${(props) => (props.correct ? '#bbffbb' : 'white')};
`;

GeoQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  correct: PropTypes.bool.isRequired,
};

export default GeoQuestion;
