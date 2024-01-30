import { ReduxAction, ReduxActionTypes } from "@/ce/constants/ReduxActionConstants";
import { AppsmithLocationState } from "@/utils/history";
import type { Location } from "history";

export interface RouteChangeActionPayload {
    location: Location;
    prevLocation: Location;
  }


  export const routeChanged = (
    location: Location,
    prevLocation: Location,
  ): ReduxAction<RouteChangeActionPayload> => {
    return {
      type: ReduxActionTypes.ROUTE_CHANGED,
      payload: { location, prevLocation },
    };
  };
  
//   export const storeFocusHistory = (key: string, focusState: FocusState) => {
//     return {
//       type: ReduxActionTypes.SET_FOCUS_HISTORY,
//       payload: { key, focusState },
//     };
//   };
  
  export const removeFocusHistoryRequest = (url: string) => {
    return {
      type: ReduxActionTypes.REMOVE_FOCUS_HISTORY_REQUEST,
      payload: { url },
    };
  };
  
  export const removeFocusHistory = (key: string) => {
    return {
      type: ReduxActionTypes.REMOVE_FOCUS_HISTORY,
      payload: { key },
    };
  };
  