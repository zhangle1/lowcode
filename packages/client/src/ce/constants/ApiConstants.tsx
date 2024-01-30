export enum ERROR_CODES {
  PAGE_NOT_FOUND = "PAGE_NOT_FOUND",
  SERVER_ERROR = "SERVER_ERROR",
  REQUEST_NOT_AUTHORISED = "REQUEST_NOT_AUTHORIZED",
  REQUEST_TIMEOUT = "REQUEST_TIMEOUT",
  FAILED_TO_CORRECT_BINDING = "FAILED_TO_CORRECT_BINDING",
  REQUEST_FORBIDDEN = "REQUEST_FORBIDDEN",
  CYPRESS_DEBUG = "CYPRESS_DEBUG",
}



export const LOGIN_SUBMIT_PATH = "login";
export const SIGNUP_SUBMIT_PATH = "users";


export const OAuthURL = "/oauth2/authorization";
export const GoogleOAuthURL = `${OAuthURL}/google`;
export const GithubOAuthURL = `${OAuthURL}/github`;