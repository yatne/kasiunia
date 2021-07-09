import {
  UNLOCK_QUIZ,
  SET_SELECTED_TAB, GENERAL_KNOWLEDGE_TAB, QUIZ_PAGE_TABS, SET_ANSWER, SET_QUIZ_STAGE, UNLOCK_TAB,
} from './constants';

const initialState = {
  quizUnlocked: window.localStorage.getItem('quizUnlocked') || false,
  selectedTabs: {
    [QUIZ_PAGE_TABS]: GENERAL_KNOWLEDGE_TAB,
  },
  unlockedTabs:
    JSON.parse(window.localStorage.getItem('unlocked-tabs')) || [GENERAL_KNOWLEDGE_TAB],
  quizStages: {
    [GENERAL_KNOWLEDGE_TAB]: 0,
  },
  quizAnswers: {},
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case UNLOCK_QUIZ:
      return { ...state, quizUnlocked: true };
    case SET_SELECTED_TAB:
      return {
        ...state,
        selectedTabs: { ...state.selectedTabs, [action.payload.page]: action.payload.tab },
      };
    case UNLOCK_TAB:
      return {
        ...state,
        unlockedTabs: state.unlockedTabs.concat([action.payload.tab]),
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
    default:
      return state;
  }
}
