import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import * as serviceWorker from "./serviceWorker";
import { Integrations } from "@sentry/tracing";
import "typeface-roboto";
import "./index.css";
import App from "./components/App";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  release: `${process.env.REACT_APP_NAME}@${process.env.REACT_APP_VERSION}`,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});
ReactDOM.render(<App />, document.getElementById("root"));
// serviceWorker.register();
