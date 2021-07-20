import {
  UNLOCK_QUIZ,
  SET_SELECTED_TAB,
  GENERAL_KNOWLEDGE_TAB,
  QUIZ_PAGE_TABS,
  SET_ANSWER,
  SET_QUIZ_STAGE,
  UNLOCK_TAB,
  GEOGRAPHIC_TAB,
  FINAL_ROUND_TAB,
  HISTORICAL_TAB,
  UNLOCK_SECOND_PART,
  SECOND_PART_PAGE_TABS,
  MATH_TAB, MUSIC_TAB, FINAL_FINAL_TAB,
} from './constants';

const initialState = {
  quizUnlocked: window.localStorage.getItem('quizUnlocked') || false,
  secondPartUnlocked: window.localStorage.getItem('secondPartUnlocked') || false,
  selectedTabs: {
    [QUIZ_PAGE_TABS]: GENERAL_KNOWLEDGE_TAB,
    [SECOND_PART_PAGE_TABS]: MATH_TAB,
  },
  unlockedTabs:
    JSON.parse(window.localStorage.getItem('unlocked-tabs')) || [GENERAL_KNOWLEDGE_TAB, MATH_TAB],
  quizStages: {
    [GENERAL_KNOWLEDGE_TAB]: 0,
    [HISTORICAL_TAB]: 0,
    [GEOGRAPHIC_TAB]: 0,
    [FINAL_ROUND_TAB]: 0,
    [MATH_TAB]: 0,
    [MUSIC_TAB]: 0,
    [FINAL_FINAL_TAB]: 0,
  },
  quizAnswers: {},
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case UNLOCK_QUIZ:
      return { ...state, quizUnlocked: true };
    case UNLOCK_SECOND_PART:
      return { ...state, secondPartUnlocked: true };
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
