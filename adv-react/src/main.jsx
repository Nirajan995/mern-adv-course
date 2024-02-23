import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./components/Error.jsx";
import { Provider } from "react-redux";
import store from "../store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Error />}>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
