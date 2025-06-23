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
import Complect from "./components/Complect.jsx";
import About from "./components/About.jsx";
import Podershka from "./components/Podershka.jsx";
import ProductsSection from "./components/ProductsSection.jsx";
import Footer from "./components/Footer.jsx";

library.add(fas, far);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <App />
      <Header />
      <HeroBanner />
      <ProductsSection />
      <Configator />
      <Complect />
      <About />
      <Podershka />
      <Footer />
    </DarkModeProvider>
  </StrictMode>
);
