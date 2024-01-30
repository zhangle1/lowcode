export interface LoginFormValues {
  username?: string;
  password?: string;
  remember?: string;
}

export interface SignupFormValues {
  email?: string;
  password?: string;
  name?: string;
}

export interface ResetPasswordFormValues {
  password?: string;
  token?: string;
  email?: string;
}

export type CreatePasswordFormValues = ResetPasswordFormValues;

export interface ForgotPasswordFormValues {
  email?: string;
}


export const getIsSafeRedirectURL = (redirectURL: string) => {
    try {
      return (
        new URL(redirectURL, window.location.origin).origin ===
        window.location.origin
      );
    } catch (e) {
      return false;
    }
  };
  