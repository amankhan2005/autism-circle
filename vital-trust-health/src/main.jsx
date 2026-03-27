import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// ✅ ADD THIS
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>

      {/* 🔥 WRAP HERE */}
      <ThemeProvider>
        <App />
      </ThemeProvider>

    </BrowserRouter>
  </React.StrictMode>
);