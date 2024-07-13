import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-e8z12c5ddvizfmjs.us.auth0.com"
     clientId="wNrRr1w9lHKhjT0lmMqAtaZtRbbn8Y8Y"
     authorizationParams={{
      redirect_uri: "https://two-broke-millennial.vercel.app/"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
