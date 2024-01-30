import { AppState } from "@/ce/reducers";
import { ThemeMode, getThemeDetails } from "@/selectors/themeSelectors";
import { useCurrentPath } from "@/utils/router/RouterUtils";
import { useSelector } from "react-redux";
import {  BrowserRouter as Router,Route, Routes, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { requiresUnauth } from "./requiresAuthHOC";
import { AUTH_LOGIN_URL } from "@/constants/routes/baseRoutes";

 function UserAuth() {
//   const path = useCurrentPath();

  const lightTheme = useSelector((state: AppState) =>
    getThemeDetails(state, ThemeMode.LIGHT)
  );

  return (
    <ThemeProvider theme={lightTheme}>
      <div className="absolute inset-0 flex flex-col  overflow-y-auto auth-container bg-[color:var(--ads-color-background-secondary)] p-4 t--auth-container">
        <Outlet></Outlet>
      </div>
    </ThemeProvider>
  );
}  



export default requiresUnauth(UserAuth);
