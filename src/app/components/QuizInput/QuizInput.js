import React, { useState } from 'react';
import PropTypes from 'prop-types';

const QuizInput = ({ answer, onCorrectAnswer, onlyNumbers }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    const isNumbersOnly = /^[0-9,.]*$/.test(newValue);

    if (isNumbersOnly || !onlyNumbers) {
      setValue(newValue);
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
};

QuizInput.defaultProps = {
  onlyNumbers: false,
};

export default QuizInput;
