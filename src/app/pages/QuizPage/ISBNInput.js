import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TAB_A, TAB_B, TAB_C } from '../../redux/constants';

const ISBNInput = () => {
  const isbnParts = useSelector((state) => state.isbn);

  return (
    <InputContainer>
      <NumberPart className="tab-a">
        {isbnParts[TAB_B] ? isbnParts[TAB_B] : 'Tu taki mniejszy trochę prezent'}
      </NumberPart>
      <NumberPart className="tab-b">
        {isbnParts[TAB_C] ? isbnParts[TAB_C] : 'Tu taki nie-do-końca prezent co właściwie jest też dla mnie'}
      </NumberPart>
      <NumberPart className="tab-c">
        {isbnParts[TAB_A] ? isbnParts[TAB_A] : 'Tu taki prezent co mam nadzieję się nie obrazisz'}
      </NumberPart>
    </InputContainer>
  );
};

const NumberPart = styled.div`
  min-width: 44px;
  text-align: center;
  margin: 0 5px;
  width: 30%;
  padding: 8px;

  &.tab-a {
    border: 2px solid #D7E114;
  }

  &.tab-b {
    border: 2px solid #18B715;
  }

  &.tab-c {
    border: 2px solid #5142ff;
  }

  &.tab-d {
    border: 2px solid #DB1AD2;
  }

  &.no-tab {
    border: 2px solid black;
  }
`;

const InputContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  justify-content: center;
  margin: 0 60px;
  width: 900px;
  background-color: #fdfdfd;
  box-shadow: 1px 2px #dddddd;
`;

export default ISBNInput;
