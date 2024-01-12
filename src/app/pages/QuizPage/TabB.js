import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TAB_B } from '../../redux/constants';
import Quiz from '../../components/Quiz/Quiz';
import { setIsbnPart } from '../../redux/actions';
import b1 from '../../../static/img/ania/1.jpg';
import b2 from '../../../static/img/ania/2.jpg';
import b3 from '../../../static/img/ania/3.jpg';
import b4 from '../../../static/img/ania/4.jpg';
import b5 from '../../../static/img/ania/5.jpg';
import b6 from '../../../static/img/ania/6.jpeg';
import b7 from '../../../static/img/ania/7.jpeg';
import b8 from '../../../static/img/ania/8.jpeg';

const TabB = () => {
  const questions = [
    { image: b1,
      question: 'Gdzie zrobiono to zdjęcie?',
      answers: ['Giżycko', 'W Giżycku'] },
    { image: b3,
      question: 'W którym miesiącu zrobiono to zdjęcie?',
      answers: ['W lipcu', 'lipiec'] },
    { image: b4,
      question: 'Jak ma na nazwisko mężczyzna na tym zdjęciu?',
      answer: 'Zieliński' },
    { image: b5,
      question: 'W jakim kraju zrobiono to zdjęcie?',
      answers: ['W Tunezji', 'Tunezja'] },
    { image: b8,
      question: 'Na czyim ślubie zrobiono to zdjęcie?',
      answers: ['Pauliny', 'Pauliny Brzezińskiej'] },
    { image: b6,
      question: 'W jakim mieście zrobiono to zdjęcie?',
      answers: ['W Wiedniu', 'Wiedeń'] },
    { image: b7,
      question: 'Jaki budynek widać w tle?',
      answers: ['Pałac Bielińskich', 'Pałac Bielińskich w Otwocku', 'Pałac Bielińskich w Otwocku Wielkim'] },
    { image: b2,
      question: 'Gdzie zrobiono to zdjęcie?',
      answers: ['Wysowa', 'W Wysowej'] },
  ];

  const dispatch = useDispatch();

  return (
    <TabContainer>
      <Quiz quizId={TAB_B} questions={questions} onQuizFinished={() => dispatch(setIsbnPart(TAB_B, '3'))} />
    </TabContainer>
  );
};

const TabContainer = styled.div`
  display: block;
`;

export default TabB;
