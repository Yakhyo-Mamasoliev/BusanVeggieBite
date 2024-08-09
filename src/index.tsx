// Importing essential libraries and modules for the React application.
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "./css/index.css";
import theme from "./app/MaterialTheme";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./app/context/ContextProvider";

// Find the DOM element with the id "root" to mount the React app.
const container = document.getElementById("root")!;

// Create a React root using the retrieved DOM element.
const root = createRoot(container);

// Render the React app with various providers and configurations.
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Provides Redux store to the entire app */}
      <ContextProvider>
        {" "}
        {/* Custom context provider for app-specific state */}
        <ThemeProvider theme={theme}>
          {" "}
          {/* Provides Material-UI theme */}
          <CssBaseline />{" "}
          {/* Resets CSS to provide a consistent look across browsers */}
          <Router>
            {" "}
            {/* Enables routing in the app */}
            <App /> {/* Main component of the application */}
          </Router>
        </ThemeProvider>
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);

// Optional: Measure and report performance metrics of the app.
reportWebVitals();
