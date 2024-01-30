import { ReduxActionTypes } from "@/ce/constants/ReduxActionConstants";


export const flushErrorsAndRedirect = (url: string) => {
    return {
      type: ReduxActionTypes.FLUSH_AND_REDIRECT,
      payload: {
        url,
      },
    };
  };


  export const flushErrors = () => {
    return {
      type: ReduxActionTypes.FLUSH_ERRORS,
    };
  };
  