import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import * as serviceWorker from "./serviceWorker";
import { Integrations } from "@sentry/tracing";
import "typeface-roboto";
import "./index.css";
import App from "./components/App";
import initStore from './config/store';
import {Provider} from "react-redux";

const store = initStore();
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  release: `${process.env.REACT_APP_NAME}@${process.env.REACT_APP_VERSION}`,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

const render = Component => ReactDOM.hydrate(
  <Provider store={store}>
      <Component />
  </Provider>
  ,
  document.getElementById("root")
)
render(App)
// serviceWorker.register();
