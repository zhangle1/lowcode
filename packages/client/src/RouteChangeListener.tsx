import { useLocation } from "react-router";
// import { AppsmithLocationState } from "./utils/history";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { routeChanged } from "./actions/focusHistoryActions";

export default function RouteChangeListener(){
    const location = useLocation();
    const dispatch = useDispatch();
    const prevLocationRef = useRef(location);
    useEffect(() => {
        const prevLocation = prevLocationRef;
        dispatch(routeChanged(location, prevLocation.current));
        prevLocation.current = location;
      }, [location.pathname, location.hash]);
      return null;

}