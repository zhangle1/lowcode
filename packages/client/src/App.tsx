import "./App.css";
// import { Engine } from "@npm-lerna-monorepo/engine";
import { setAutoFreeze } from "immer";
import { appInitializer } from "./utils/AppUtils";
import { ThemeProvider } from "styled-components";
import React from "react";
import GlobalStyle from "./globalStyles";
import { Provider, connect } from "react-redux";
import store from "./store";
// import { AppState } from "@appsmith/reducers";
import { getCurrentThemeDetails } from "./selectors/themeSelectors";
import AppErrorBoundary from "./AppErrorBoundry";
import { AppState } from "./ce/reducers";
import AppRouter, { LoginPage } from "./ce/AppRouter";


import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AUTH_LOGIN_URL, BASE_URL } from "./constants/routes/baseRoutes";
import LandingScreen from "./LandingScreen";

const shouldAutoFreeze = process.env.NODE_ENV === "development";
setAutoFreeze(shouldAutoFreeze);
appInitializer();

function App() {
  return (
    <Provider store={store}>
      <ThemedAppWithProps />
    </Provider>
  );
}

class ThemedApp extends React.Component<{
  currentTheme: any;
}> {
  render() {
    return (
      <ThemeProvider theme={this.props.currentTheme}>
        <GlobalStyle></GlobalStyle>
        <AppErrorBoundary>
          {/* <Router>
      <div>
      <Routes>
      <Route path={BASE_URL} element={<LandingScreen></LandingScreen>} />
      <Route path={AUTH_LOGIN_URL} element={<LoginPage></LoginPage>} />
      </Routes>
      </div>
    </Router> */}
          <AppRouter></AppRouter>
        </AppErrorBoundary>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  currentTheme: getCurrentThemeDetails(state),
});

const ThemedAppWithProps = connect(mapStateToProps)(ThemedApp);

export default App;
