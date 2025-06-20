import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import "./index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { DarkModeProvider } from "./context/DarkModeContext";
import HeroBanner from "./components/HeroBanner.jsx";
import Configator from "./components/Configator.jsx";

library.add(fas, far);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <Header />
      <HeroBanner />
      <Configator />
      <App />
    </DarkModeProvider>
  </StrictMode>
);
