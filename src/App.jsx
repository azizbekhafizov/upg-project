import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Brands from "./pages/brands";
import Configurator from "./pages/Configurator";
import HyperX from "./pages/HyperX";
import Kupit from "./pages/kupit";
import Novinki from "./pages/novinki";
import PhoneAuth from "./pages/PhoneAuth";
import Login from "./components/login";
import WishList from "./components/WishListt";
import Cart from "./components/Cart";

// Home components
import HeroBanner from "./components/HeroBanner";
import Configator from "./components/Configator";
import Complect from "./components/Complect";
import About from "./components/About";
import Podershka from "./components/Podershka";
import ProductsSection from "./components/ProductsSection";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Home sahifasi */}
        <Route
          path="/"
          element={
            <>
              <HeroBanner />
              <ProductsSection />
              <Configator />
              <Complect />
              <About />
              <Podershka />
            </>
          }
        />

        {/* Boshqa sahifalar */}
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/hyperx" element={<HyperX />} />
        <Route path="/kupit" element={<Kupit />} />
        <Route path="/novinki" element={<Novinki />} />
        <Route path="/phone-auth" element={<PhoneAuth />} />
        <Route path="/account" element={<Login />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}
