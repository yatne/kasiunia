import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TAB_A } from '../../redux/constants';
import Quiz from '../../components/Quiz/Quiz';
import { setIsbnPart } from '../../redux/actions';
import big from '../../../static/img/ania/big.jpg';
import kwiat from '../../../static/img/ania/kwiatkalafiora.webp';
import robin from '../../../static/img/ania/robincook.jpg';
import chmiel from '../../../static/img/ania/chmielewska.jpg';
import chylka from '../../../static/img/ania/chylka.jpg';
import gil from '../../../static/img/ania/gilmore.jpg';
import how from '../../../static/img/ania/howrude.jpg';
import labio from '../../../static/img/ania/wlabiryncie.jpg';
import miss from '../../../static/img/ania/missagent.jpg';

const TabA = () => {
  const questions = [
    { image: kwiat, question: 'Jak nazywa się grupa założona przez Gabrysię w książce Kwiat kalafiora', answer: 'eksperymentalny sygnał dobra' },
    { image: robin, question: 'Która książka Robina Cooka była jego debiutancką?', answer: 'coma' },
    { image: chmiel, question: 'W co grała Joanna w książce "Całe zdanie nieboszczyka"?', answers: ['ruletka', 'ruletkę', 'w ruletkę'] },
    { image: chylka, question: 'Ile książek o Chyłce napisał dotąd mróz?', answers: ['17', 'siedemnaście'] },
    { image: gil, question: 'Jak nazywała się matka Lorelai w serialu kochane kłopoty?', answer: 'emily' },
    { image: how, question: 'Z jakiego serialu pochodzi zdjęcie i cytat?', answers: ['pełna chata', 'full house'] },
    { image: labio, question: 'Kto grał szefa instytutu farmakologii w pierwszej polskiej telenoweli?', answer: 'marek kondrat' },
    { image: big, question: 'Odtwórca której z ról w Big Bang theory faktycznie ma tytuł doktora?', answer: 'amy farrah fowler' },
    { image: miss, question: 'Jaki stan reprezentowała Sandra Bullock w filmie Miss Agent?', answer: 'new jersey' },
  ];

  const dispatch = useDispatch();

  return (
    <TabContainer>
      <Header>Różne takie pytania</Header>
      <Quiz quizId={TAB_A} questions={questions} onQuizFinished={() => dispatch(setIsbnPart(TAB_A, '1'))} />
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
