import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TAB_A } from '../../redux/constants';
import Quiz from '../../components/Quiz/Quiz';
import muzyczka from '../../../static/audio/muzyczka.mp3';
import miasto1 from '../../../static/img/miasto_1.jpeg';
import miasto2 from '../../../static/img/miasto_2.jpeg';
import miasto3 from '../../../static/img/miasto_3.jpeg';
import miasto4 from '../../../static/img/miasto_4.jpeg';
import miasto5 from '../../../static/img/miasto_5.jpeg';
import miasto6 from '../../../static/img/miasto_6.webp';
import { setIsbnPart } from '../../redux/actions';

const TabA = () => {
  const questions = [
    {
      type: 'multiple',
      question: 'Które województwa zostały podbite?',
      answerConfig: [
        { label: 'dolnośląskie' },
        { label: 'kujawsko-pomorskie', answer: true },
        { label: 'lubelskie', answer: true },
        { label: 'lubuskie', answer: false },
        { label: 'łódzkie', answer: true },
        { label: 'małopolskie', answer: true },
        { label: 'mazowieckie', answer: true },
        { label: 'opolskie', answer: false },
        { label: 'podkarpackie', answer: false },
        { label: 'podlaskie', answer: true },
        { label: 'pomorskie', answer: true },
        { label: 'śląskie', answer: false },
        { label: 'świętokrzyskie', answer: true },
        { label: 'warmińsko-mazurskie', answer: true },
        { label: 'wielkopolskie', answer: true },
        { label: 'zachodniopomorskie', answer: false },
      ],
    },
    {
      type: 'audio',
      question: 'Pytanie muzyczne. Podaj tytuł tego utworu.',
      answer: 'Wave',
      audio: muzyczka,
    },
    {
      question: 'Zaczynamy zabawę w: "Co to za miasto?"',
      answer: 'Zamość',
      image: miasto1,
      id: 'm2',
    },
    {
      question: '       ',
      answer: 'Sztokholm',
      image: miasto5,
      id: 'm1',
    },
    {
      question: '  ',
      answer: 'Tykocin',
      image: miasto2,
      id: 'm3',
    },
    {
      question: 'Perła Unesco',
      answer: 'Pruszków',
      image: miasto4,
      id: 'm4',
    },
    {
      question: 'A tu dokładnie w tym miejscu Stachu miał załamkę, a Janek robił siku.',
      answer: 'Olsztyn',
      image: miasto3,
      id: 'm5',
    },
    {
      question: '',
      answer: 'Zatoka przygód',
      image: miasto6,
      id: 'm5',
    },
  ];

  const dispatch = useDispatch();

  return (
    <TabContainer>
      <Header>Różne takie pytania</Header>
      <Quiz quizId={TAB_A} questions={questions} onQuizFinished={() => dispatch(setIsbnPart(TAB_A, '978'))} />
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
