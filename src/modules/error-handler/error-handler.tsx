import ErrorCard from "../../components/error-card";
import LoadignSpinner from "../../components/loading-spinner";
import useErrorStore from "../../store/useErrorStore";

interface ErrorHandlerProps {
  children: React.ReactNode;
}

const ErrorHandler = ({ children }: ErrorHandlerProps) => {
  const error = useErrorStore((state) => state.error);
  const loading = useErrorStore((state) => state.loading);
  const actions = useErrorStore((state) => state.actions);
  const { closeError } = actions;

  return (
    <>
      {loading && <LoadignSpinner />}
      {error.length > 0 && <ErrorCard error={error} closeError={closeError} />}
      {children}
    </>
  );
};

export default ErrorHandler;
