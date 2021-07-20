import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setAnswer } from '../../redux/actions';

const InlineInput = ({
  id, width, correct, onValueChange, maxSigns, initialValue,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    e.preventDefault();
    if (newValue.length <= maxSigns) {
      setValue(newValue);
      setAnswer(id, newValue);
      onValueChange(id, newValue.toLowerCase());
    }
  };

  return (
    <Input correct={correct} width={width} value={value} onChange={(e) => handleChange(e)} />
  );
};

const Input = styled.input`
  width: ${(props) => props.width};
  border: none;
  border-bottom: 1px solid ${(props) => (props.correct ? 'green' : 'black')};
  &:focus {
    outline: none;
  }
  font-family: "Lato", sans-serif;
`;

InlineInput.propTypes = {
  id: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  correct: PropTypes.bool,
  width: PropTypes.string.isRequired,
  maxSigns: PropTypes.number.isRequired,
  initialValue: PropTypes.string,
};

InlineInput.defaultProps = {
  correct: false,
  initialValue: '',
};

export default InlineInput;
