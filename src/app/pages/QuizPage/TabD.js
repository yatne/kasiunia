import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TAB_D } from '../../redux/constants';
import { setIsbnPart } from '../../redux/actions';
import Quiz from '../../components/Quiz/Quiz';

const TabA = () => {
  const dispatch = useDispatch();
  const questions = [{
    question: 'co tam?',
    answer: 'ok',
  }];

  return (
    <TabContainer>
      <Header>Test z wiedzy ogólnej oraz popkultury</Header>
      <Quiz quizId={TAB_D} questions={questions} onQuizFinished={() => dispatch(setIsbnPart(TAB_D, '836'))} />
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
