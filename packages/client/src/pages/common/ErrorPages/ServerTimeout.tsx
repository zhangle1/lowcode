import { Button } from "@appsmithorg/design-system";
import Page from "./Page";
import { PAGE_SERVER_TIMEOUT_DESCRIPTION, PAGE_SERVER_TIMEOUT_ERROR_CODE, PAGE_SERVER_TIMEOUT_TITLE, createMessage } from "@/ce/constants/messages";



function ServerTimeout() {
    return (
      <Page
        cta={
          <Button
            className="button-position"
            kind="primary"
            onClick={() => window.location.reload()}
            size="md"
          >
            重试
          </Button>
        }
        description={createMessage(PAGE_SERVER_TIMEOUT_DESCRIPTION)}
        errorCode={createMessage(PAGE_SERVER_TIMEOUT_ERROR_CODE)}
        title={createMessage(PAGE_SERVER_TIMEOUT_TITLE)}
      />
    );
  }
  
  export default ServerTimeout;