import { IMainState } from '../main.store';

export interface ISetCounterAction {
  type: 'setCounter';
  counter: number;
}

export const setCounter = (state: IMainState, action: ISetCounterAction): IMainState => {
  return {
    ...state,
    counter: action.counter,
  };
};

export default setCounter;
