import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RecommendationsProvider } from "./context/RecommendationsContext/RecommendationsProvider.jsx";
import { RecordedAlertsProvider } from "./context/RecordedAlerts/RecordedAlertsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RecommendationsProvider>
      <RecordedAlertsProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </RecordedAlertsProvider>
    </RecommendationsProvider>
  </BrowserRouter>
);
