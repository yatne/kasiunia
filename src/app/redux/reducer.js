import {
  UNLOCK_GAME,
  SET_SELECTED_TAB,
  TAB_A,
  SET_ANSWER,
  SET_QUIZ_STAGE,
  TAB_B,
  TAB_C,
  TAB_D,
  SET_ISBN_PART,
} from './constants';

const initialState = {
  gameUnlocked: window.localStorage.getItem('gameUnlocked') || false,
  secondPartUnlocked: window.localStorage.getItem('secondPartUnlocked') || false,
  selectedTab: TAB_A,
  quizStages: {
    [TAB_A]: 0,
    [TAB_D]: 0,
    [TAB_B]: 0,
    [TAB_C]: 0,
  },
  quizAnswers: {},
  isbn: {
    [TAB_A]: '',
    [TAB_D]: '',
    [TAB_B]: '',
    [TAB_C]: '',
  },
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case UNLOCK_GAME:
      return { ...state, gameUnlocked: true };
    case SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload.tab,
      };
    case SET_ANSWER:
      return {
        ...state,
        quizAnswers: { ...state.quizAnswers, [action.payload.questionId]: action.payload.answer },
      };
    case SET_QUIZ_STAGE:
      return {
        ...state,
        quizStages: {
          ...state.quizStages,
          [action.payload.tab]: action.payload.stage,
        },
      };
    case SET_ISBN_PART:
      return {
        ...state,
        isbn: {
          ...state.isbn,
          [action.payload.tab]: action.payload.part,
        },
      };
    default:
      return state;
  }
}
