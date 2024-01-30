import { ERROR_CODES } from "@/ce/constants/ApiConstants";
import {
  ReduxAction,
  ReduxActionErrorPayload,
  ReduxActionTypes,
} from "@/ce/constants/ReduxActionConstants";
import { createReducer } from "@/utils/ReducerUtils";
import _ from "lodash";

const initialState: ErrorReduxState = {
  safeCrash: false,
  safeCrashCode: undefined,
  currentError: { sourceAction: "", message: "", stackTrace: "" },
};

const errorReducer = createReducer(initialState, {
  [ReduxActionTypes.SAFE_CRASH_APPSMITH]: (
    state: ErrorReduxState,
    action: ReduxAction<ReduxActionErrorPayload>
  ) => ({
    ...state,
    safeCrash: true,
    safeCrashCode: _.get(action, "payload.code"),
  }),
});

export interface ErrorReduxState {
  safeCrash: boolean;
  safeCrashCode?: ERROR_CODES;
  currentError: {
    sourceAction?: string;
    message?: string;
    stackTrace?: string;
  };
}

export default errorReducer;
