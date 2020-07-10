import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";

let cardSrc = require("./utils/cardSrc.js");


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-6wl79wos.us.auth0.com"
      clientId="9BCL4264SN2jBqjjXPx8aWmGBJxS2sJx"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
