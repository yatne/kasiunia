import React from 'react';
import { useDispatch } from 'react-redux';
import { Authorize, Unauthorize } from '../redux/actions';
import QuizInput from '../components/QuizInput/QuizInput';

const QuizPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      quiz
      <button type="button" onClick={() => dispatch(Authorize())}>
        click!
      </button>
      <button type="button" onClick={() => dispatch(Unauthorize())}>
        no click plz!
      </button>
      <QuizInput onCorrectAnswer={() => { console.log('jaha'); }} answer="pupa" />
      <QuizInput onCorrectAnswer={() => { console.log('123'); }} answer="1234.4321" onlyNumbers />

    </div>
  );
};

export default QuizPage;
