import styled from "styled-components";
import { PageErrorMessage, PageErrorMessageProps } from "./Components/PageErrorMessage";

const ErrorIconContainer = styled.div`
  & {
    align-items: end;

    svg {
      transform: scale(2.5) rotate(180deg);
    }
  }
`;

interface PageProps {
  children?: React.ReactNode;
  errorCode?: string | number;
  errorIcon?: React.ReactNode;
  title?: string;
  description?: string;
  cta?: React.ReactNode;
  flushErrorsAndRedirect?: any;
  errorMessages?: PageErrorMessageProps[];
}

function Page(props: PageProps) {
  const { cta, description, errorCode, errorIcon, title } = props;

  const backgroundColor = "#000000";
  const textColor = "white";

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center space-y-6 bg-[color:var(--ads-color-background-secondary)] ${
        textColor === "white" ? "text-white" : ""
      }`}
    >
      {errorIcon && (
        <ErrorIconContainer className="mb-2 flex items-center font-bold text-3xl justify-center w-28 aspect-square text-[color:var(--ads-color-brand)]">
          {errorIcon}
        </ErrorIconContainer>
      )}
      {errorCode && (
        <div className="-mt-8 flex items-center font-bold text-3xl justify-center w-auto h-28 px-2 bg-white border aspect-square text-[color:var(--ads-color-brand)]">
          {errorCode}
        </div>
      )}
      {title && (
        <p className="text-3xl font-semibold t--error-page-title">{title}</p>
      )}
      {/* t--error-page-description class used in EE */}
      {description && (
        <p className="text-center t--error-page-description">{description}</p>
      )}
      {props.errorMessages?.map((errorMessage, idx) => (
        <PageErrorMessage data={errorMessage} key={idx} />
      ))}
      {cta}
    </div>
  );
}


export default Page;

