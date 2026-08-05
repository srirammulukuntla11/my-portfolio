import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AdminProvider } from "./context/AdminContext";
import { PortfolioProvider } from "./context/PortfolioContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminProvider>
      <PortfolioProvider>
        <App />
      </PortfolioProvider>
    </AdminProvider>
  </React.StrictMode>
);