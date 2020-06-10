import * as React from 'react';
import { reducer, IMainAction } from './main.reducer';

const { createContext, useReducer } = React;

export interface IMainState {
  counter: number;
  max: number;
  min: number;
  userName: string;
  userToken: string;
  isLoading: boolean;
}

export interface IDispatchMainActions {
  (action: IMainAction): void;
}

export interface IMainStore {
  state: IMainState;
  dispatch: IDispatchMainActions;
}

export const initalState: IMainState = {
  counter: 0,
  max: 10,
  min: 0,
  userName: '',
  userToken: '',
  isLoading: false,
};

const createStore = (): IMainStore => {
  const [state, dispatch] = useReducer(reducer, initalState);
  return { state, dispatch };
};

export const MainStore: React.Context<IMainStore> = createContext<IMainStore>({
  state: initalState,
  dispatch: () => {},
});

export const MainProvider = (props: { children: React.ReactNode }) => {
  const store = createStore();
  const { children } = props;
  return <MainStore.Provider value={store}>{children}</MainStore.Provider>;
};

MainProvider.defaultProps = {};

export default {
  MainStore,
  MainProvider,
};
