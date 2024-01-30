import { produce } from "immer";
import { ReduxAction } from "../ce/constants/ReduxActionConstants";

export const createReducer = (
  initialState: any,
  handlers: { [type: string]: (state: any, action: any) => any }
) => {
  return function reducer(state = initialState, action: ReduxAction<any>) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};

export const createImmerReducer = (
  initialState: any,
  handlers: { [type: string]: any },
) => {
  return function reducer(state = initialState, action: ReduxAction<any>) {
    if (handlers.hasOwnProperty(action.type)) {
      return produce(handlers[action.type])(state, action);
    } else {
      return state;
    }
  };
};
