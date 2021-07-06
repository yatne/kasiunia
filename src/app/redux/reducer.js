import {
  UNLOCK_QUIZ, SET_SELECTED_TAB, GENERAL_KNOWLEDGE_TAB, QUIZ_PAGE_TABS,
} from './constants';

const initialState = {
  quizUnlocked: window.localStorage.getItem('quizUnlocked') || false,
  selectedTabs: {
    [QUIZ_PAGE_TABS]: GENERAL_KNOWLEDGE_TAB,
  },
  unlockedTabs: {
    [QUIZ_PAGE_TABS]: window.localStorage.getItem(`${QUIZ_PAGE_TABS}-unlocked-tabs`) || [GENERAL_KNOWLEDGE_TAB],
  },
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case UNLOCK_QUIZ:
      return { ...state, quizUnlocked: true };
    case SET_SELECTED_TAB:
      return { ...state, selectedTabs: { [action.payload.page]: action.payload.tab } };
    default:
      return state;
  }
}
