import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TAB_B } from '../../redux/constants';
import Quiz from '../../components/Quiz/Quiz';
import domek from '../../../static/img/quiz/domek.png';
import zwierz from '../../../static/img/quiz/zwierz.jpeg';
import { setIsbnPart } from '../../redux/actions';

const TabA = () => {
  const questions = [
    {
      type: 'fill',
      texts: ['', ' ', ' Myszka Miki!'],
      blanks: ['Hocki', 'Klocki'],
    },
    {
      question: 'Zajrzyj do lodówki.',
      answer: 'TYMCZAS',
    },
    {
      question: 'Podaj tytuł jednej z najsłynniejszych radzieckich powieści nautycznych przenoszącej odyseuszowski mit w świat antropomorficznego ptactwa.',
      answer: 'Dokąd idziesz kaczuszko?',
    },
    {
      answer: '12367',
      number: true,
      image: domek,
    },
    {
      question: 'Czy żyrafa dla zabawy może ugryźć kępkę trawy?',
      answers: [
        'jasne ale oczywiście woli gryźć na drzewach liście',
        'jasne, ale oczywiście woli gryźć na drzewach liście',
      ],
    },
    {
      question: 'Czy znasz góry Jura?',
      answer: 'Skamieniały las',
    },
    {
      answer: 'leniuchowiec dwupalczasty',
      image: zwierz,
    },
  ];

  const dispatch = useDispatch();

  return (
    <TabContainer>
      <Header>Zabawy i Zabawki</Header>
      <Quiz quizId={TAB_B} questions={questions} onQuizFinished={() => dispatch(setIsbnPart(TAB_B, '83'))} />
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
