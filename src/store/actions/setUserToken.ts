import { IMainState } from '../main.store';

export interface ISetUserTokenAction {
  type: 'setUserToken';
  userToken: string;
}

export const setUserToken = (state: IMainState, action: ISetUserTokenAction): IMainState => {
  return {
    ...state,
    userToken: action.userToken,
  };
};

export default setUserToken;
