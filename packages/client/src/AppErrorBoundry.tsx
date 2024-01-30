import { Button } from "@appsmithorg/design-system";
import log from "loglevel";
import { Component } from "react";
import styled from "styled-components";
import AppCrashImage from "./assets/404-image.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: calc(100vh - ${(props) => props.theme.headerHeight});
  .bold-text {
    font-weight: ${(props) => props.theme.fontWeights[3]};
    font-size: 24px;
  }
  .page-unavailable-img {
    width: 35%;
  }
  .button-position {
    margin: auto;
  }
`;

class AppErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    log.error({ error, errorInfo });
    // Sentry.captureException(error);
    // AnalyticsUtil.logEvent("APP_CRASH", { error, errorInfo });
    this.setState({
      hasError: true,
    });
  }

  render() {

    if (this.state.hasError) {
        return (
            <Wrapper>
            <img alt="App crashed" src={AppCrashImage} />
            <div>
              <p className="bold-text">哎呀！出了问题</p>
              <p>
              请使用下面的按钮重试。<br />
              如果问题仍然存在，请与我们联系</p>
              <br />
              <Button onClick={() => window.location.reload()} size="md">
                Retry
              </Button>
            </div>
          </Wrapper>
            )
   
    }
    return this.props.children;
  }
}


export default AppErrorBoundary;

