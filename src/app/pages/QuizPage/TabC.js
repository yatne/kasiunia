import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TAB_C } from '../../redux/constants';
import Quiz from '../../components/Quiz/Quiz';
import { setIsbnPart } from '../../redux/actions';

const TabC = () => {
  const questions = [
    { type: 'organise',
      question: 'Ustaw chronologicznie wyjazdy.',
      tags: [
        { id: 8, content: 'Bornholm', order: 8 },
        { id: 4, content: 'Paryż (bez Kasi)', order: 4 },
        { id: 7, content: 'Karpacz', order: 7 },
        { id: 9, content: 'Wiedeń', order: 9 },
        { id: 2, content: 'Rattvik', order: 2 },
        { id: 12, content: 'Sardynia', order: 12 },
        { id: 1, content: 'Młodów', order: 1 },
        { id: 10, content: 'Albania', order: 10 },
        { id: 6, content: 'Praga', order: 6 },
        { id: 3, content: 'Antwepia', order: 3 },
        { id: 11, content: 'Budapeszt', order: 11 },
        { id: 5, content: 'Kołobrzeg', order: 5 },
      ] },
  ];

  const dispatch = useDispatch();

  return (
    <TabContainer>
      <Header>Tu tylko jedno zadanie ale bardzo trudne:</Header>
      <Quiz quizId={TAB_C} questions={questions} onQuizFinished={() => dispatch(setIsbnPart(TAB_C, '1'))} />
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

export default TabC;
