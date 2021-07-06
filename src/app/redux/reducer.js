import { UNLOCK_QUIZ } from './constants';

const initialState = {
  quizUnlocked: window.localStorage.getItem('quizUnlocked') || false,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case UNLOCK_QUIZ:
      return { quizUnlocked: true };
    default:
      return state;
  }
}