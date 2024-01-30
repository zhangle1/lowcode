import { connect } from "react-redux";
import { AppState } from "./ce/reducers";
import {
  APPLICATIONS_URL,
  AUTH_LOGIN_URL,
  BASE_URL,
} from "./constants/routes/baseRoutes";
import { ANONYMOUS_USERNAME, User } from "./constants/userConstants";
import { getCurrentUser, getUserAuthError } from "./selectors/usersSelectors";
import { Navigate } from "react-router";
import ServerUnavailable from "./pages/common/ErrorPages/ServerUnavailable";
import PageLoadingBar from "./pages/common/PageLoadingBar";
import log from "loglevel";

interface Props {
  user?: User;
  authError: string;
}

function LandingScreen(props: Props) {
  if (props.user && window.location.pathname === BASE_URL) {
    if (props.user.email === ANONYMOUS_USERNAME) {
      log.info("重定向到登录页")
      // return <Navigate  to={AUTH_LOGIN_URL} />;
      return <Navigate  to={AUTH_LOGIN_URL} />;
    } else {
      log.info("到主页")
      return <Navigate to={APPLICATIONS_URL} />;
    }
  }
  if (props.authError && props.authError.length) {
    return <ServerUnavailable />;
  }
  return <PageLoadingBar />;
}

const mapStateToProps = (state: AppState) => ({
  user: getCurrentUser(state),
  authError: getUserAuthError(state),
});

export default connect(mapStateToProps)(LandingScreen);
