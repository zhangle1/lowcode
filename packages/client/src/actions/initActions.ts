import { ReduxActionTypes } from "@/ce/constants/ReduxActionConstants";
import { APP_MODE } from "@/entities/App";

export const initCurrentPage = () => {
  return {
    type: ReduxActionTypes.INITIALIZE_CURRENT_PAGE,
  };
};

export interface InitializeEditorPayload {
  applicationId?: string;
  pageId?: string;
  branch?: string;
  mode: APP_MODE;
}
