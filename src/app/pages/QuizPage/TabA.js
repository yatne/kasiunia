import React from 'react';
import styled from 'styled-components';
import { TAB_A } from '../../redux/constants';
import Quiz from '../../components/Quiz/Quiz';

const TabA = () => {
  const questions = [
    {
      question: 'Musimy sprawić żeby pojawił się klubik!',
      answers: ['hocki klocki myszka miki', 'chocki klocki myszka miki'],
    },
    {
      question: 'Która planeta wiruje na boku?',
      answer: 'Uran',
    },
  ];

  return (
    <TabContainer>
      <Header>Test z wiedzy ogólnej oraz popkultury</Header>
      <Quiz quizId={TAB_A} questions={questions} />
    </TabContainer>
  );
};

const Header = styled.h2`
  text-align: center;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
`;

const TabContainer = styled.div`
  display: block;
`;

export default TabA;
