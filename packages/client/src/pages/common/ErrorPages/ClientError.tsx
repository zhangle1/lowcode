import { useDispatch } from "react-redux";
import Page from "./Page";
import { Button } from "@appsmithorg/design-system";
import { flushErrors } from "@/actions/errorActions";
import { DISCORD_URL } from "@/constants/ThirdPartyConstants";
import {
  PAGE_CLIENT_ERROR_DESCRIPTION,
  PAGE_CLIENT_ERROR_TITLE,
  createMessage,
} from "@/ce/constants/messages";

function ClientError() {
  const dispatch = useDispatch();

  return (
    <Page
      cta={
        <Button
          className="button-position"
          endIcon="right-arrow"
          kind="primary"
          onClick={() => {
            dispatch(flushErrors());
            window.open(DISCORD_URL, "_blank");
          }}
          size="md"
        >
          Contact us on discord
        </Button>
      }
      description={createMessage(PAGE_CLIENT_ERROR_DESCRIPTION)}
      title={createMessage(PAGE_CLIENT_ERROR_TITLE)}
    />
  );
}

export default ClientError;
