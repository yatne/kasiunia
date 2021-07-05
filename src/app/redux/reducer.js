import { AUTHORIZE, UNAUTHORIZE } from './constants';

const initialState = {
  authorized: false,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHORIZE:
      return { authorized: true };
    case UNAUTHORIZE:
      return { authorized: false };
    default:
      return state;
  }
}
