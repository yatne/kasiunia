import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TAB_D } from '../../redux/constants';
import { setIsbnPart } from '../../redux/actions';
import Quiz from '../../components/Quiz/Quiz';

const TabA = () => {
  const dispatch = useDispatch();
  const questions = [
    { question: 'W laboratorium wielkiego elektronika, w miejscu do którego zapuszczają się tylko nieliczni, nad szufladami EITI, znajdź drewniany twór, który niegdyś skrywał w sobie dziecięce puzzle.',
      answer: 'pumpernikiel' },
    { question: 'By pumpernikla pokonać musisz zajrzeć do skrzyni na której nocą przebywasz. Jeśli ruch się nie powiedzie, próbuj ponownie i obserwuj zmiany.',
      answer: 'jabadabadu' },
    { question: 'Odpowiedź co zrobić masz znajdziesz tam gdzie ubrania są bez plam.',
      answer: 'jaksydraksy' },
    { question: 'Sprawdź miejsce gdzie możesz zaczerpnąć świerzego, miejskiego powietrza. Gdy rozwiążesz podpowiedź, musisz uzbroić się w cierpliwość. Złożone maszyny wymagają czasu.',
      answer: 'olejupa' },
    { question: 'Gdy stary do dom wraca, w zamku nim obraca.',
      answer: 'koniec' },
  ];

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
