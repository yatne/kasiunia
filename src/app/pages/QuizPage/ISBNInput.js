import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TAB_A } from '../../redux/constants';

const ISBNInput = () => {
  const isbnParts = useSelector((state) => state.isbn);

  return (
    <InputContainer>
      {isbnParts[TAB_A]}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 60px;
  width: 900px;
  background-color: #fdfdfd;
  box-shadow: 1px 2px #dddddd;
  min-height: 60px;
`;

export default ISBNInput;
