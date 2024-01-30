import { Button } from "@appsmithorg/design-system";
import Page from "./Page";
import { PAGE_SERVER_UNAVAILABLE_ERROR_CODE, PAGE_SERVER_UNAVAILABLE_ERROR_MESSAGES, PAGE_SERVER_UNAVAILABLE_TITLE, createMessage } from "@/ce/constants/messages";



function ServerUnavailable(){
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
            errorCode={createMessage(PAGE_SERVER_UNAVAILABLE_ERROR_CODE)}
            errorMessages={PAGE_SERVER_UNAVAILABLE_ERROR_MESSAGES(!!false)}
            title={createMessage(PAGE_SERVER_UNAVAILABLE_TITLE, !!false)}
        ></Page>
        )

}


export default ServerUnavailable;