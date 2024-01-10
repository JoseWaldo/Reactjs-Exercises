import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ErrorHandler from "./modules/error-handler/error-handler.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ErrorHandler>
      <App />
    </ErrorHandler>
  </BrowserRouter>
);
