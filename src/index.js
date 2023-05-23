import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Components/ReactContext/UserContext";
import { VotesProvider } from "./Components/ReactContext/VotesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <UserProvider>
      <VotesProvider>
        <App />
      </VotesProvider>
    </UserProvider>
  </BrowserRouter>
);
