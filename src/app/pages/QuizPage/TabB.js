import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TAB_B } from '../../redux/constants';
import Quiz from '../../components/Quiz/Quiz';
import domek from '../../../static/img/quiz/domek.png';
import zwierz from '../../../static/img/quiz/zwierz.jpeg';
import { setIsbnPart } from '../../redux/actions';
import dumel from '../../../static/audio/dumel.m4a';
import kiera from '../../../static/audio/kiera.m4a';
import slima from '../../../static/audio/slima.m4a';
import al from '../../../static/img/quiz/al.png';
import pan from '../../../static/img/quiz/pan.png';

const TabA = () => {
  const questions = [
    { type: 'fill',
      texts: ['', ' ', ' Myszka Miki!'],
      blanks: ['Hocki', 'Klocki'] },
    { question: 'Podaj tytuł jednej z najsłynniejszych radzieckich powieści nautycznych przenoszącej odyseuszowski mit w świat antropomorficznego ptactwa.',
      answer: 'Dokąd idziesz kaczuszko?' },
    { question: 'Czy żyrafa dla zabawy może ugryźć kępkę trawy?',
      answers: [
        'jasne ale oczywiście woli gryźć na drzewach liście',
        'jasne, ale oczywiście woli gryźć na drzewach liście',
      ] },
    { question: 'Teraz zajrzyj do lodówki.',
      answer: 'Psi Patrol' },
    { answer: 'babce',
      number: true,
      image: domek },
    { answer: 'faciowi',
      question: ' ',
      InnerHtml: () => (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iX9TmRZHZdQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) },
    { answer: 'co ty na to?',
      number: true,
      image: al,
      question: '       ' },
    { answer: 'leniuchowiec dwupalczasty',
      question: '  ',
      image: zwierz },
    { answers: ['czy znasz góry jura?', 'zzy znasz góry jura', 'góry jura'],
      image: pan,
      question: '                     ' },
    { type: 'audio',
      question: '     ',
      answer: 'Bing!',
      audio: dumel },
    { type: 'audio',
      question: '      ',
      answer: 'Blue',
      audio: kiera },
    { type: 'audio',
      question: '        ',
      answer: 'Było sobie życie',
      audio: slima },
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
