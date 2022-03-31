import React from 'react';
import styled from 'styled-components';
import { TAB_B } from '../../redux/constants';
import Quiz from '../../components/Quiz/Quiz';
import domek from '../../../static/img/quiz/domek.png';

const TabA = () => {
  const questions = [
    {
      answer: '12367',
      number: true,
      image: domek,
    },
    {
      question: 'Którna boku?',
      answer: 'Uran',
    },
  ];
  return (
    <TabContainer>
      <Header>Test z wiedzy ogólnej oraz popkultury</Header>
      <Quiz quizId={TAB_B} questions={questions} />
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
