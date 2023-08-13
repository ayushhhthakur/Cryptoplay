import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-bycykdvqqsrd708a.us.auth0.com"
    clientId="IvB8bDokO1xOqXm7c81EtpMh5imk7cFV"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>
);
