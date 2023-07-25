import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TAB_B } from '../../redux/constants';
import Quiz from '../../components/Quiz/Quiz';
import { setIsbnPart } from '../../redux/actions';
import b1 from '../../../static/img/32/b1.webp';
import b2 from '../../../static/img/32/b2.webp';
import b3 from '../../../static/img/32/b3.webp';
import b4 from '../../../static/img/32/b4.webp';
import b5 from '../../../static/img/32/b5.webp';
import b6 from '../../../static/img/32/b6.png';
import bu1 from '../../../static/img/32/bu1.webp';
import bu2 from '../../../static/img/32/bu2.webp';
import bu3 from '../../../static/img/32/bu3.webp';
import bu4 from '../../../static/img/32/bu4.webp';
import bu5 from '../../../static/img/32/bu5.webp';
import bu6 from '../../../static/img/32/bu6.webp';
import bu7 from '../../../static/img/32/bu7.webp';
import bu8 from '../../../static/img/32/bu8.webp';
import bi0 from '../../../static/img/32/bi0.png';
import bi1 from '../../../static/img/32/bi1.png';
import bi2 from '../../../static/img/32/bi2.png';
import bi3 from '../../../static/img/32/bi3.png';
import p0 from '../../../static/img/32/p0.webp';
import p1 from '../../../static/img/32/p1.webp';
import p2 from '../../../static/img/32/p2.webp';
import p3 from '../../../static/img/32/p3.webp';
import p4 from '../../../static/img/32/p4.webp';
import p5 from '../../../static/img/32/p5.webp';
import p6 from '../../../static/img/32/p6.webp';
import p7 from '../../../static/img/32/p7.webp';
import d1 from '../../../static/img/32/d1.webp';
import d2 from '../../../static/img/32/d2.jpeg';
import d3 from '../../../static/img/32/d3.jpg';
import pir from '../../../static/img/32/pir.webp';
import s1 from '../../../static/img/32/s1.png';
import s2 from '../../../static/img/32/s2.webp';
import bl1 from '../../../static/img/32/bl1.webp';
import bl2 from '../../../static/img/32/bl2.webp';
import sa1 from '../../../static/img/32/sa1.webp';
import pr1 from '../../../static/img/32/pr1.webp';
import pr2 from '../../../static/img/32/pr2.jpeg';

const TabA = () => {
  const questions = [
    { image: b1,
      answer: 'barbamama' },
    { image: b2,
      question: '',
      answers: ['barbartek', 'barbabartek'] },
    { image: b3,
      answer: 'barbabłysk' },
    { image: b4,
      answer: 'barbalesio' },
    { image: b5,
      answers: ['barbabela', 'barbabella'] },
    { image: b6,
      answer: 'lolita' },
    { image: bu2,
      answer: 'chilli' },
    { image: bu1,
      answers: ['bandżi', 'bungee'] },
    { image: bu3,
      answers: ['mufinka', 'muffinka'] },
    { image: bu4,
      answer: 'stopka' },
    { image: bu5,
      answer: 'kołnierzyk' },
    { image: bu6,
      answers: ['pani matylda', 'matylda'] },
    { image: bu7,
      answer: 'judo' },
    { image: bu8,
      answer: 'wafel' },
    { image: bi0,
      answer: 'charlie' },
    { image: bi1,
      answer: 'koko' },
    { image: bi2,
      answer: 'amma' },
    { image: bi3,
      answer: 'pola' },
    { image: p0,
      answer: 'chickaletta' },
    { image: p1,
      answers: ['otis', 'wujek otis'] },
    { image: p2,
      answer: 'ace sorensen' },
    { image: p3,
      answers: ['apollo super pies', 'apollo superpies', 'super pies apollo', 'superpies apollo'] },
    { image: p4,
      answer: 'liberty' },
    { image: p5,
      answer: 'francois turbot' },
    { image: p6,
      answers: ['rex', 'reks'] },
    { image: p7,
      answer: 'farmerka yumi' },
    { image: d1,
      answers: ['maka paka', 'makka pakka'] },
    { image: d2,
      answer: 'igi pigiel' },
    { image: d3,
      answer: 'tomblibusie' },
    { image: pir,
      answer: 'kapitan kapitańska' },
    { image: s1,
      answer: 'superpyra' },
    { image: s2,
      answer: 'groszka zła' },
    { image: bl1,
      answer: 'blaze' },
    { image: bl2,
      answers: ['crusher', 'kraszer'] },
    { image: sa1,
      answer: 'santiago' },
    { image: pr1,
      answer: 'pan robótka' },
    { image: pr2,
      answer: 'kształty' },
  ];

  const dispatch = useDispatch();

  return (
    <TabContainer>
      <Header>Co to za postać?</Header>
      <Quiz quizId={TAB_B} questions={questions} onQuizFinished={() => dispatch(setIsbnPart(TAB_B, 'Prezencik znajdziesz w mojej szafie, na dolnej z górynych półek'))} />
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
