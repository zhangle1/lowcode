import {
  LOGIN_FORM_EMAIL_FIELD_NAME,
  LOGIN_FORM_PASSWORD_FIELD_NAME,
} from "@/ce/constants/forms";
import { LoginFormValues, getIsSafeRedirectURL } from "./helpers";
import type { InjectedFormProps, DecoratedFormProps } from "redux-form";
import { reduxForm, formValueSelector, isDirty } from "redux-form";
import {
  FORM_VALIDATION_EMPTY_PASSWORD,
  FORM_VALIDATION_INVALID_EMAIL,
  LOGIN_PAGE_INVALID_CREDS_FORGOT_PASSWORD_LINK,
  LOGIN_PAGE_SIGN_UP_LINK_TEXT,
  LOGIN_PAGE_SUBTITLE,
  LOGIN_PAGE_TITLE,
  NEW_TO_APPSMITH,
  createMessage,
} from "@/ce/constants/messages";
import { isEmail, isEmptyString } from "@/utils/formhelpers";
import { Link, useLocation } from "react-router-dom";
import { getCurrentUser } from "@/selectors/usersSelectors";
import { useSelector } from "react-redux";
import { LOGIN_SUBMIT_PATH } from "@/ce/constants/ApiConstants";
import {
  FORGOT_PASSWORD_URL,
  SIGN_UP_URL,
} from "@/constants/routes/baseRoutes";
import Container from "./Container";
import Helmet from "react-helmet";

const validate = (values: LoginFormValues, props: ValidateProps) => {
  const errors: LoginFormValues = {};
  const email = values[LOGIN_FORM_EMAIL_FIELD_NAME] || "";
  const password = values[LOGIN_FORM_PASSWORD_FIELD_NAME];
  const { isPasswordFieldDirty, touch } = props;
  if (!password || isEmptyString(password)) {
    isPasswordFieldDirty && touch?.(LOGIN_FORM_PASSWORD_FIELD_NAME);
    errors[LOGIN_FORM_PASSWORD_FIELD_NAME] = createMessage(
      FORM_VALIDATION_EMPTY_PASSWORD
    );
  }
  if (!isEmptyString(email) && !isEmail(email)) {
    touch?.(LOGIN_FORM_EMAIL_FIELD_NAME);
    errors[LOGIN_FORM_EMAIL_FIELD_NAME] = createMessage(
      FORM_VALIDATION_INVALID_EMAIL
    );
  }

  return errors;
};

export function Login(props: LoginFormProps) {
  const { emailValue: email, error, valid } = props;
  const isFormValid = valid && email && !isEmptyString(email);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const htmlPageTitle = "AppSmith";
  const invalidCredsForgotPasswordLinkText = createMessage(
    LOGIN_PAGE_INVALID_CREDS_FORGOT_PASSWORD_LINK
  );
  let showError = false;
  let errorMessage = "";
  const currentUser = useSelector(getCurrentUser);

  //   if (currentUser?.emptyInstance) {
  //     return <Redirect to={SETUP} />;
  //   }
  if (queryParams.get("error")) {
    errorMessage = queryParams.get("message") || queryParams.get("error") || "";
    showError = true;
  }
  let loginURL = "/api/v1/" + LOGIN_SUBMIT_PATH;
  let signupURL = SIGN_UP_URL;
  const redirectUrl = queryParams.get("redirectUrl");
  if (redirectUrl != null && getIsSafeRedirectURL(redirectUrl)) {
    const encodedRedirectUrl = encodeURIComponent(redirectUrl);
    loginURL += `?redirectUrl=${encodedRedirectUrl}`;
    signupURL += `?redirectUrl=${encodedRedirectUrl}`;
  }

  let forgotPasswordURL = `${FORGOT_PASSWORD_URL}`;
  if (props.emailValue && !isEmptyString(props.emailValue)) {
    forgotPasswordURL += `?email=${props.emailValue}`;
  }

  const footerSection = true && (
    <div className="px-2 py-4 flex align-center justify-center text-base text-center text-[color:var(--ads-v2\-color-fg)] text-[14px]">
      {createMessage(NEW_TO_APPSMITH)}
      <Link
        className="t--sign-up t--signup-link pl-[var(--ads-v2\-spaces-3)]"
        kind="primary"
        target="_self"
        to={signupURL}
      >
        {createMessage(LOGIN_PAGE_SIGN_UP_LINK_TEXT)}
      </Link>
    </div>
  );

  return (
    <Container
      footer={footerSection}
      subtitle={createMessage(LOGIN_PAGE_SUBTITLE)}
      title={createMessage(LOGIN_PAGE_TITLE)}
    >
      <Helmet>
        <title>{htmlPageTitle}</title>
      </Helmet>

      
    </Container>
  );
}

type LoginFormProps = {
  emailValue: string;
} & InjectedFormProps<LoginFormValues, { emailValue: string }>;

type ValidateProps = {
  isPasswordFieldDirty?: boolean;
} & DecoratedFormProps<
  LoginFormValues,
  { emailValue: string; isPasswordFieldDirty?: boolean }
>;
