import { IMainState } from './main.store';

import setCounter, { ISetCounterAction } from './actions/setCounter';
import setUserToken, { ISetUserTokenAction } from './actions/setUserToken';

export type IMainAction = ISetCounterAction | ISetUserTokenAction;

export const reducer = (state: IMainState, action: IMainAction): IMainState => {
  switch (action.type) {
    case 'setCounter':
      return setCounter(state, action);
    case 'setUserToken':
      return setUserToken(state, action);
    default:
      return state;
  }
};

export default reducer;
