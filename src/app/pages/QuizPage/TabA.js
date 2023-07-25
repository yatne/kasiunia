import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TAB_A } from '../../redux/constants';
import Quiz from '../../components/Quiz/Quiz';
import { setIsbnPart } from '../../redux/actions';

const TabA = () => {
  const questions = [
    { type: 'superSlideMe' },
    { question: 'jak jest?', answer: 'super' },
    { question: 'rozejrzyj się dokładnie w swoich rozszerzeniach chrome. Tam powinno być takie Z \n1.', answer: 'chlebek' },
    { question: '2.', answer: 'paróweczka' },
    { question: '3.', answer: 'mydełko' },

    { InnerHtml: () => (
      <span>
        No to zstało tylko wygrać
        <a href="https://itch.io/embed-upload/8225210?color=333333" rel="noreferrer" style={{ color: 'blue' }} target="_blank"> grę.</a>
      </span>
    ),
    answer: 'ciasteczko' },
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
