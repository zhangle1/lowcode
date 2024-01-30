import { AppState } from "@/ce/reducers";
import { Theme, dark, light, theme } from "@/constants/DefaultTheme";
// import { AppState } from "ce/reducers";
// import { Theme, dark, light, theme } from "constants/DefaultTheme";
export enum ThemeMode {
    LIGHT="LIGHT",
    DARK="DARK",
}



export const lightTheme = { ...theme, colors: { ...theme.colors, ...light } };

const darkTheme = { ...theme, colors: { ...theme.colors, ...dark } };

// Only for usage with ThemeProvider
export const getThemeDetails = (
    state: AppState,
    themeMode: ThemeMode,
  ): Theme => (themeMode === ThemeMode.LIGHT ? lightTheme : darkTheme);

  export const getTheme = (themeMode: ThemeMode) => {
    const colors = themeMode === ThemeMode.LIGHT ? light : dark;
    return { ...theme, colors: { ...theme.colors, ...colors } };
  };

  
  // Use to get the current theme of the app set via the theme switcher
export const getCurrentThemeDetails = (state: AppState): Theme =>
state.ui.theme.theme;
