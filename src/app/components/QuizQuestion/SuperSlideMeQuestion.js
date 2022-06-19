import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SuperSlideMe } from 'react-super-slide-me';
import ssm from '../../../static/img/ssm.png';

const SuperSlideMeQuestion = ({
  onCorrectAnswer, correct,
}) => {
  let style = 'border: 1px solid black';
  if (correct) {
    style = 'border: 2px solid green';
  }

  return (
    <QuestionContainer borderStyle={style}>
      <QuestionImage src={ssm} />
      <InnerContainer>
        <SuperSlideMe levelConfig={{ levelFilter: 'demo' }} onLastLevelReached={() => onCorrectAnswer()} />
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
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
`;

SuperSlideMeQuestion.propTypes = {
  onCorrectAnswer: PropTypes.func.isRequired,
  correct: PropTypes.bool,
};

SuperSlideMeQuestion.defaultProps = {
  correct: false,
};

export default SuperSlideMeQuestion;
