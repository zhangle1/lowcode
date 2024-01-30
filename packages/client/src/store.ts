// import appReducer from "@appsmith/reducers";
// import routeParamsMiddleware from "ce/RouteParamsMiddleware";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import routeParamsMiddleware from "./ce/RouteParamsMiddleware";
import appReducer from "./ee/reducers";

const middleware = applyMiddleware(routeParamsMiddleware);

export default createStore(appReducer, {}, middleware);
