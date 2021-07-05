import { AUTHORIZE, UNAUTHORIZE } from './constants';

export const Authorize = () => ({
  type: AUTHORIZE,
});

export const Unauthorize = () => ({
  type: UNAUTHORIZE,
});
