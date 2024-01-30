import { ERROR_CODES } from "@/ce/constants/ApiConstants";
import PageNotFound from "./ErrorPages/PageNotFound";
import ServerUnavailable from "./ErrorPages/ServerUnavailable";
import ServerTimeout from "./ErrorPages/ServerTimeout";
import ClientError from "./ErrorPages/ClientError";
import StackTrace from "./ErrorPages/StackTrace";
import GenericError from "./ErrorPages/GenericError";

interface ErrorPageProps {
  code: ERROR_CODES;
}


function ErrorPage(props: ErrorPageProps) {
    const { code } = props;
  
    switch (code) {
      case ERROR_CODES.PAGE_NOT_FOUND:
        return <PageNotFound />;
      case ERROR_CODES.SERVER_ERROR:
        return <ServerUnavailable />;
      case ERROR_CODES.REQUEST_TIMEOUT:
        return <ServerTimeout />;
      case ERROR_CODES.FAILED_TO_CORRECT_BINDING:
        return <ClientError />;
      case ERROR_CODES.CYPRESS_DEBUG:
        return <StackTrace />;
      default:
        return <GenericError errorCode={code} />;
    }
  }
  
  export default ErrorPage;