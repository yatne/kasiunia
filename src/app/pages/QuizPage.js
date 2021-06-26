import React from 'react';
import { useDispatch } from 'react-redux';
import { Authorize, Unauthorize } from '../../redux/actions';

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
    </div>
  );
};

export default QuizPage;
