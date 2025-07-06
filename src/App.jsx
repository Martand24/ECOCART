import { Route , Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import GreenHeader from "./components/GreenHeader";
import GreenNavbar from "./components/GreenNavbar";
import GreenHome from "./components/GreenHome";
import GreenChain from "./components/greenChain";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";
import About from "./components/About";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={[<Header />, <Navbar />, <Home />, <Footer />]}
      />
      <Route
        path="/dashboard"
        element={[<GreenHeader />, <GreenNavbar />, <Dashboard />, <Footer />]}
      />
      <Route
        path="/ecocart"
        element={[<GreenHeader />, <GreenNavbar />, <GreenHome />, <Footer />]}
      />
      <Route path="/green-chain" element = {[<GreenHeader />, <GreenNavbar />, <GreenChain /> ,<Footer />]} />
      <Route
        path="/product/:id"
        element={[<GreenHeader />, <GreenNavbar />, <ProductDetails />, <Footer />]}
      />
      <Route
        path="/checkout"
        element={[<GreenHeader />, <GreenNavbar />, <Checkout />, <Footer />]}
      />
      <Route
        path="/order-confirmation"
        element={[<GreenHeader />, <GreenNavbar />, <OrderConfirmation />, <Footer />]}
      />
      <Route
        path="/about"
        element={[<GreenHeader />, <GreenNavbar />, <About />, <Footer />]}
      />
    </Routes>
  );
};

export default App;
