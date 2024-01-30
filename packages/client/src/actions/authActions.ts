import { ReduxActionTypes } from "@/ce/constants/ReduxActionConstants";




export const getCurrentUser = () => ({
    type: ReduxActionTypes.FETCH_USER_INIT,
  });
  