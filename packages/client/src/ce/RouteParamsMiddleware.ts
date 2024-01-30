import { Middleware } from "redux";
import { ReduxAction } from "./constants/ReduxActionConstants";

export const handler = (action: ReduxAction<any>) => {
  // let appParams: ApplicationURLParams = {};
  // let pageParams: PageURLParams[] = [];
};

const routeParamsMiddleware: Middleware =
  () => (next: any) => (action: ReduxAction<any>) => {
    handler(action);
    return next(action);
  };

export default routeParamsMiddleware;
