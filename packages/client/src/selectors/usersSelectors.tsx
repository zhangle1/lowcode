import { AppState } from "@/ce/reducers";
import { ANONYMOUS_USERNAME, User } from "@/constants/userConstants";

export const getCurrentUser = (state: AppState): User | undefined =>
  state.ui?.users?.currentUser;

export const getCurrentUserLoading = (state: AppState): boolean =>
  state.ui.users.loadingStates.fetchingUser;

export const getUserAuthError = (state: AppState): string =>
  state.ui.users.error;

export const getUsers = (state: AppState): User[] => state.ui.users.users;

export const getFeatureFlagsFetched = (state: AppState) =>
  state.ui.users.featureFlag.isFetched;

export const getFeatureFlagsFetching = (state: AppState) =>
  state.ui.users.featureFlag.isFetching;

export const getIsUserLoggedIn = (state: AppState): boolean =>
  state.ui.users.currentUser?.email !== ANONYMOUS_USERNAME;
