import React from 'react';
import QuizInput from '../components/QuizInput/QuizInput';

const QuizPage = () => (
  <div>
    quiz
    <QuizInput onCorrectAnswer={() => { console.log('jaha'); }} answer="pupa" />
    <QuizInput onCorrectAnswer={() => { console.log('123'); }} answer="1234.4321" onlyNumbers />

  </div>
);

export default QuizPage;
