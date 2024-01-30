import { APPLICATIONS_URL } from "@/constants/routes/baseRoutes";
import { ANONYMOUS_USERNAME } from "@/constants/userConstants";
import { getCurrentUser } from "@/selectors/usersSelectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";


export const requiresUnauth = (Component: React.ComponentType) => {
    function Wrapped(props: any) {
      const user = useSelector(getCurrentUser);
      if (!user) return null;
      if (user?.email && user?.email !== ANONYMOUS_USERNAME) {
        return  <Navigate to={APPLICATIONS_URL} />;
      }
      return <Component {...props} />;
    }
  
    return Wrapped;
  };