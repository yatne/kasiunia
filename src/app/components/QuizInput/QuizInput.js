import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../../redux/actions';

const QuizInput = ({
  answer, onCorrectAnswer, onlyNumbers, questionId, answers,
}) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.quizAnswers[questionId] || '');

  const handleChange = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    const isNumbersOnly = /^[0-9,.]*$/.test(newValue);

    if (isNumbersOnly || !onlyNumbers) {
      dispatch(setAnswer(questionId, newValue));
      if ((answer && newValue.toLowerCase() === answer.toLowerCase())
        || answers.includes(newValue.toLowerCase())) {
        onCorrectAnswer(newValue);
      }
    }
  };

  return (
    <input value={value} onChange={(e) => handleChange(e)} style={{ width: '200px' }} />
  );
};

QuizInput.propTypes = {
  answer: PropTypes.string,
  onCorrectAnswer: PropTypes.func.isRequired,
  onlyNumbers: PropTypes.bool,
  questionId: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string),
};

QuizInput.defaultProps = { answer: '',
  onlyNumbers: false,
  answers: [] };

export default QuizInput;
