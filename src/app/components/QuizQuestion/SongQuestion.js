import React from 'react';
import PropTypes, { object, string } from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import InlineInput from '../QuizInput/InlineInput';
import { setAnswer } from '../../redux/actions';

const getAnswerForQuestion = (id) => (store) => store.quizAnswers[id];

const SongQuestion = ({
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
        { id: blankId, correctValue: blanks[index], correct: blanks[index] === value },
      );
    }
  });

  const handleValueChange = (id, value) => {
    dispatch(setAnswer(id, value));
    const answer = answerArr.find((ans) => ans.id === id);
    answer.correct = answer.correctValue === value;
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
            correct={item.value === item.answer}
            initialValue={item.value}
          />
        )))}
    </QuestionContainer>
  );
};

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: white;
  margin: 30px;
  border-radius: 2px;
  ${(props) => props.borderStyle};
`;

SongQuestion.propTypes = {
  texts: PropTypes.arrayOf(string).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  blanks: PropTypes.arrayOf(object).isRequired,
  correct: PropTypes.bool,
  onAllCorrect: PropTypes.func.isRequired,
};

SongQuestion.defaultProps = {
  correct: false,
};

export default SongQuestion;
