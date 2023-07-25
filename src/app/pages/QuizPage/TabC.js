import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TAB_C } from '../../redux/constants';
import Quiz from '../../components/Quiz/Quiz';
import { setIsbnPart } from '../../redux/actions';

const TabC = () => {
  const questions = [
    { type: 'organise',
      question: 'ustaw chronologicznie wyjazdy',
      tags: [
        { id: 1, content: 'Janek', order: 7, data: '2018-03-19' },
        { id: 2, content: 'Stachu', order: 13, data: '2021-02-25' },
        { id: 3, content: 'Sara S.', order: 2, data: '2010' },
        { id: 4, content: 'Zuzia', order: 1, data: '2004' },
        { id: 5, content: 'Sara B.', order: 6, data: '2017' },
        { id: 6, content: 'Laura', order: 9, data: '2019-03-18' },
        { id: 7, content: 'Franek', order: 21, data: '2022-01-15' },
        { id: 8, content: 'Alicja', order: 11, data: '2020-10~26' },
        { id: 9, content: 'Julka', order: 14, data: '2021-04-07' },
        { id: 10, content: 'Kazik', order: 12, data: '2021-01' },
        { id: 11, content: 'Tadzik', order: 19, data: '2021-12-21' },
        { id: 12, content: 'Mania', order: 18, data: '2021-12-21 + 1 mania starsza o minute' },
        { id: 13, content: 'Feliks', order: 22, data: '2022-07-probably' },
        { id: 14, content: 'Kosma', order: 8, data: '2018-09?' },
        { id: 15, content: 'Jerzyk', order: 16, data: '2021-08~13' },
        { id: 16, content: 'Tymek', order: 17, data: '2021-08-23' },
        { id: 17, content: 'Stanisław Cz.', order: 3, data: '2013-09' },
        { id: 18, content: 'Tosia Cz.', order: 4, data: '2014-09' },
        { id: 21, content: 'Cezary', order: 10, data: '2020-07-21' },
        { id: 22, content: 'Juliusz', order: 20, data: '2022-03-09' },
      ] },
  ];

  const dispatch = useDispatch();

  return (
    <TabContainer>
      <Header>Pytanie i skojarzenia</Header>
      <Quiz quizId={TAB_C} questions={questions} onQuizFinished={() => dispatch(setIsbnPart(TAB_C, '83'))} />
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
