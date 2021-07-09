import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../../redux/actions';

const QuizInput = ({
  answer, onCorrectAnswer, onlyNumbers, questionId,
}) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.quizAnswers[questionId] || '');

  const handleChange = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    const isNumbersOnly = /^[0-9,.]*$/.test(newValue);

    if (isNumbersOnly || !onlyNumbers) {
      dispatch(setAnswer(questionId, newValue));
      if (newValue.toLowerCase() === answer.toLowerCase()) {
        onCorrectAnswer();
      }
    }
  };

  return (
    <input value={value} onChange={(e) => handleChange(e)} />
  );
};

QuizInput.propTypes = {
  answer: PropTypes.string.isRequired,
  onCorrectAnswer: PropTypes.func.isRequired,
  onlyNumbers: PropTypes.bool,
  questionId: PropTypes.string.isRequired,
};

QuizInput.defaultProps = {
  onlyNumbers: false,
};

export default QuizInput;
