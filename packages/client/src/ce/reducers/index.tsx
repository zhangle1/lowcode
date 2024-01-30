// import uiReducer from "@appsmith/reducers/uiReducers";
import uiReducer from "@/ee/reducers/uiReducers";
import { ErrorReduxState } from "../../reducers/uiReducers/errorReducer";
import { ThemeState } from "../../reducers/uiReducers/themeReducer";
import { UsersReduxState } from "@/reducers/uiReducers/usersReducer";

export const reducerObject = {
  ui: uiReducer,
};

export interface AppState {
  ui:{
    errors: ErrorReduxState;
    theme: ThemeState;
    users: UsersReduxState;

  }
}
