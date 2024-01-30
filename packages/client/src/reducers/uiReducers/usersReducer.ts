import { ReduxActionTypes } from "@/ce/constants/ReduxActionConstants";
import { ANONYMOUS_USERNAME, User } from "@/constants/userConstants";
import { createReducer } from "@/utils/ReducerUtils";

const initialState: UsersReduxState = {
  loadingStates: {
    fetchingUsers: false,
    fetchingUser: false,
  },
  list: [],
  users: [],
  error: "",
  current: undefined,
  currentUser: {email:ANONYMOUS_USERNAME,
    workspaceIds: [],
    username: 'test',
    name: 'test',
    gender: 'MALE',
    isSuperUser: true,
    role: 'Super',
    isConfigurable: true,
    enableTelemetry: true,
    adminSettingsVisible: true,
    isAnonymous: true,
    isIntercomConsentGiven: true,
    emailVerified: true
  
  },
  featureFlag: {
    //   data: DEFAULT_FEATURE_FLAG_VALUE,
    isFetched: false,
    isFetching: true,
  },
  productAlert: {
    config: {
      dismissed: false,
      snoozeTill: new Date(),
    },
  },
};

const usersReducer = createReducer(initialState, {
  [ReduxActionTypes.FETCH_USER_INIT]: (state: UsersReduxState) => ({
    ...state,
    loadingStates: {
      ...state.loadingStates,
      // fetchingUser: true,
    },
  }),
});

export interface PropertyPanePositionConfig {
  isMoved: boolean;
  position: {
    left: number;
    top: number;
  };
}

export interface ProductAlert {
  messageId: string;
  title: string;
  message: string;
  canDismiss: boolean;
  remindLaterDays: number;
  learnMoreLink?: string;
}

export interface ProductAlertConfig {
  dismissed: boolean;
  snoozeTill: Date;
}

export interface ProductAlertState {
  message?: ProductAlert;
  config: ProductAlertConfig;
}

export interface UsersReduxState {
  current?: User;
  list: User[];
  loadingStates: {
    fetchingUser: boolean;
    fetchingUsers: boolean;
  };
  users: User[];
  currentUser?: User;
  error: string;
  propPanePreferences?: PropertyPanePositionConfig;
  featureFlag: {
    isFetched: boolean;
    //   data: FeatureFlags;
    isFetching: boolean;
  };
  productAlert: ProductAlertState;
}


export default usersReducer;
