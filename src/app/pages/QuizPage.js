import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import QuizInput from '../components/QuizInput/QuizInput';

const QuizPage = () => {
  const quizUnlocked = useSelector((state) => state.quizUnlocked);
  const history = useHistory();

  useEffect(() => {
    if (!quizUnlocked) {
      history.push('/');
    }
  }, []);
  return (
    <div>
      quiz
      <QuizInput onCorrectAnswer={() => { console.log('jaha'); }} answer="pupa" />
      <QuizInput onCorrectAnswer={() => { console.log('123'); }} answer="1234.4321" onlyNumbers />

    </div>
  );
};

export default QuizPage;
