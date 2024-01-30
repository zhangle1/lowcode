import { connect, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  AUTH_LOGIN_URL,
  BASE_URL,
  USER_AUTH_URL,
} from "@/constants/routes/baseRoutes";
import LandingScreen from "@/LandingScreen";
import { AppState } from "./reducers";
import { getCurrentUser } from "@/actions/authActions";
import { initCurrentPage } from "@/actions/initActions";
import { fetchProductAlertInit } from "@/actions/userActions";
import {
  getCurrentUserLoading,
  getCurrentUser as getCurrentUserSelector,
} from "@/selectors/usersSelectors";
import { Suspense, useEffect } from "react";
import log from "loglevel";
import PageLoadingBar from "@/pages/common/PageLoadingBar";
import RouteChangeListener from "@/RouteChangeListener";
import { getSafeCrash, getSafeCrashCode } from "@/selectors/errorSelectors";
import { ERROR_CODES } from "./constants/ApiConstants";
import ErrorPage from "@/pages/common/ErrorPage";
import UserAuth from "@/pages/UserAuth";
import { Login } from "@/pages/UserAuth/Login";

export const loadingIndicator = <PageLoadingBar />;
export function LocalRoutes() {
  const user = useSelector(getCurrentUserSelector);
  // const tenantPermissions = useSelector(getTenantPermissions);

  return (
    <Router>
      <Routes>
        {/* <Route path={AUTH_LOGIN_URL} element={<UserAuth></UserAuth>}> */}
        <Route path={USER_AUTH_URL} element={<UserAuth></UserAuth>}>
          <Route element={<Login></Login>} path="login" />
        </Route>
        <Route path={BASE_URL} element={<LandingScreen></LandingScreen>} />
      </Routes>
    </Router>
  );
}

function AppRouter(props: {
  safeCrash: boolean;
  safeCrashCode?: ERROR_CODES;
  getCurrentUser: () => void;
  initCurrentPage: () => void;
  fetchProductAlert: () => void;
}) {
  const { fetchProductAlert, getCurrentUser, initCurrentPage } = props;

  const currentUserIsLoading = useSelector(getCurrentUserLoading);

  useEffect(() => {
    getCurrentUser();
    initCurrentPage();
    fetchProductAlert();
  }, []);

  useEffect(() => {
    const loader = document.getElementById("loader") as HTMLDivElement;

    if (loader) {
      loader.style.width = "100vw";

      setTimeout(() => {
        loader.style.opacity = "0";
      });
    }
  }, [currentUserIsLoading]);

  log.info({ currentUserIsLoading: currentUserIsLoading });

  if (currentUserIsLoading) return <div>用户加载中</div>;

  return (
    <Suspense fallback={loadingIndicator}>
      {/* <RouteChangeListener></RouteChangeListener> */}
      {props.safeCrash ? (
        <>
          <ErrorPage code={props.safeCrashCode} />
        </>
      ) : (
        <div>
          <LocalRoutes></LocalRoutes>
        </div>
      )}
    </Suspense>
  );
}

export const mapStateToProps = (state: AppState) => ({
  safeCrash: getSafeCrash(state),
  safeCrashCode: getSafeCrashCode(state),
});

export const mapDispatchToProps = (dispatch: any) => ({
  getCurrentUser: () => dispatch(getCurrentUser()),
  initCurrentPage: () => dispatch(initCurrentPage()),
  fetchProductAlert: () => dispatch(fetchProductAlertInit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
