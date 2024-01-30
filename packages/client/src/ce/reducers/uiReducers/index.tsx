import errorReducer from "@/reducers/uiReducers/errorReducer";
import themeReducer from "@/reducers/uiReducers/themeReducer";
import usersReducer from "@/reducers/uiReducers/usersReducer";


export const uiReducerObject={
    errors: errorReducer,
    theme: themeReducer,
    users: usersReducer,

}