import { matchRoutes, useLocation } from "react-router"


const routes = [{ path: "/" }]


export const useCurrentPath = () => {
    const location = useLocation()
        matchRoutes(routes, location)
  
    return route.path
  }