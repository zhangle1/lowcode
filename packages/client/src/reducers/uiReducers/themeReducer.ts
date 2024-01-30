import { ReduxAction, ReduxActionTypes } from "@/ce/constants/ReduxActionConstants";
import { light, theme,dark } from "@/constants/DefaultTheme";
import { ThemeMode } from "@/selectors/themeSelectors";
import { createImmerReducer } from "@/utils/ReducerUtils";

const initialState: ThemeState = {
    mode: ThemeMode.LIGHT,
    theme: {
      ...theme,
      colors: {
        ...theme.colors,
        ...light,
      },
    },
    hideHeaderShadow: false,
    showHeaderSeparator: false,
  };


export type ThemeState = HeaderMetaState & {
    mode: ThemeMode;
    theme: any;
  };
  
  export interface HeaderMetaState {
    hideHeaderShadow: boolean;
    showHeaderSeparator: boolean;
  }

  
const themeReducer = createImmerReducer(initialState, {
    [ReduxActionTypes.SET_THEME]: (
      draftState: ThemeState,
      action: ReduxAction<ThemeMode>,
    ) => {
      draftState.mode = action.payload;
      const completeTheme = {
        ...theme,
      };
      switch (action.payload) {
        case ThemeMode.DARK:
          completeTheme.colors = {
            ...completeTheme.colors,
            ...dark,
          };
          break;
        default:
          completeTheme.colors = {
            ...completeTheme.colors,
            ...light,
          };
          break;
      }
      draftState.theme = completeTheme;
    },
    [ReduxActionTypes.SET_HEADER_META]: (
      draftState: ThemeState,
      action: ReduxAction<HeaderMetaState>,
    ) => {
      draftState.hideHeaderShadow = action.payload.hideHeaderShadow;
      draftState.showHeaderSeparator = action.payload.showHeaderSeparator;
    },
  });
  
  export default themeReducer;
  