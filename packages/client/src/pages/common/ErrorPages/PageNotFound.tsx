import { APPLICATIONS_URL } from "@/constants/routes/baseRoutes";
import Page from "./Page";
import { Button } from "@appsmithorg/design-system";
import { useEffect } from "react";
import {
  BACK_TO_HOMEPAGE,
  PAGE_NOT_FOUND,
  PAGE_NOT_FOUND_TITLE,
  createMessage,
} from "@/ce/constants/messages";
import { connect } from "react-redux";
import { flushErrorsAndRedirect } from "@/actions/errorActions";

interface Props {
  flushErrorsAndRedirect: any;
}


function PageNotFound(props: Props) {
  const { flushErrorsAndRedirect } = props;
  useEffect(() => {}, []);

  return (
    <Page
      cta={
        <Button
          className="mt-4 button-position"
          endIcon="right-arrow"
          kind="primary"
          onClick={() => flushErrorsAndRedirect(APPLICATIONS_URL)}
          size="md"
        >
          {createMessage(BACK_TO_HOMEPAGE)}
        </Button>
      }
      description="Either this page doesn't exist, or you don't have access to this page"
      errorCode={createMessage(PAGE_NOT_FOUND_TITLE)}
      title={createMessage(PAGE_NOT_FOUND)}
    />
  );
}

export default connect(null, {
  flushErrorsAndRedirect,
})(PageNotFound);
