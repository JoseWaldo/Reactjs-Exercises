import { useEffect } from "react";

const ErrorCard = ({
  error,
  closeError,
}: {
  error: string;
  closeError: () => void;
}) => {
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    timeout = setTimeout(() => {
      closeError();
    }, 5000);
  }, []);

  return (
    <div role="alert" className="alert alert-error w-fit fixed top-4 right-4">
      <button onClick={closeError}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <span>{error}</span>
    </div>
  );
};

export default ErrorCard;
