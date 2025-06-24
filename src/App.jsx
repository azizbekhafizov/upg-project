import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Brands from "./pages/brands";
import Configurator from "./pages/Configurator";
import HyperX from "./pages/HyperX";
import Kupit from "./pages/kupit";
import Novinki from "./pages/novinki";
import PhoneAuth from "./pages/PhoneAuth";
import Login from "./components/login"; // Faqat profile sahifasi uchun

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Brands />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/hyperx" element={<HyperX />} />
        <Route path="/kupit" element={<Kupit />} />
        <Route path="/novinki" element={<Novinki />} />
        <Route path="/phone-auth" element={<PhoneAuth />} />
        <Route path="/account" element={<Login />} /> {/* header user icon bosilganda shunga yo‘naltirasan */}
      </Routes>

    </Router>
  );
}

export default App;
