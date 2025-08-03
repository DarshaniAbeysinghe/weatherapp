import React from "react";
import ReactDOM from "react-dom/client"; // 👈 use `react-dom/client` for React 18+
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-xw7llfsarc8pqsk0.us.auth0.com";
const clientId = "mU2FYv6GlHQplIXV19iv38zoOtqrhBHP";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <App />
  </Auth0Provider>
);
