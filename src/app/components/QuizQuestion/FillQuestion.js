import React from 'react';
import PropTypes, { string } from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import InlineInput from '../QuizInput/InlineInput';
import { setAnswer } from '../../redux/actions';

const getAnswerForQuestion = (id) => (store) => store.quizAnswers[id];

const FillQuestion = ({
  texts, blanks, correct, onAllCorrect,
}) => {
  const dispatch = useDispatch();
  let style = 'border: 1px solid black';
  if (correct) {
    style = 'border: 2px solid green';
  }

  // eslint-disable-next-line no-shadow
  const arr = [];
  const answerArr = [];
  texts.forEach((text, index) => {
    arr.push({ type: 'text', text });
    if (blanks[index]) {
      const blankId = blanks[index] + index;
      const value = useSelector(getAnswerForQuestion(blankId));
      arr.push({
        type: 'input', answer: blanks[index], id: blankId, value,
      });
      answerArr.push(
        {
          id: blankId,
          correctValue: blanks[index],
          correct: value && blanks[index].toLowerCase() === value.toLowerCase(),
        },
      );
    }
  });

  const handleValueChange = (id, value) => {
    dispatch(setAnswer(id, value));
    const answer = answerArr.find((ans) => ans.id === id);
    answer.correct = answer.correctValue.toLowerCase() === value.toLowerCase();
    if (!answerArr.find((ans) => !ans.correct)) {
      onAllCorrect();
    }
  };

  return (
    <QuestionContainer borderStyle={style}>
      {arr.map((item) => (item.type === 'text'
        ? <span>{`${item.text}`}</span>
        : (
          <InlineInput
            maxSigns={item.answer.length}
            width={`${item.answer.length * 8}px`}
            id={item.id}
            onValueChange={handleValueChange}
            correct={item.value?.toLowerCase() === item.answer.toLowerCase()}
            initialValue={item.value}
          />
        )))}
    </QuestionContainer>
  );
};

const QuestionContainer = styled.div`
  display: block;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: white;
  margin: 30px;
  border-radius: 2px;
  ${(props) => props.borderStyle};
`;

FillQuestion.propTypes = {
  texts: PropTypes.arrayOf(string).isRequired,
  blanks: PropTypes.arrayOf(string).isRequired,
  correct: PropTypes.bool,
  onAllCorrect: PropTypes.func.isRequired,
};

FillQuestion.defaultProps = {
  correct: false,
};

export default FillQuestion;
