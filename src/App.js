import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Layout from './components/Layout';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

import Home from "./pages/Home";
import Products from './pages/Products';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'; // <-- import trang mới Checkout
import OrderHistory from './pages/OrderHistory';
import ScrollToTop from './components/ScrollToTop';
import CartIcon from './components/CartIcon';
import Solutions from './pages/Solutions';
import SolutionDetail from './pages/SolutionDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <CartIcon />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Trang chi tiết sản phẩm */}
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* Các route sản phẩm */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/products/:category/:type" element={<Products />} />
          <Route path="/products/:category/:type/:model" element={<Products />} />

          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:solutionId" element={<SolutionDetail />} />
        </Routes>
      </Layout>
      <Footer />
      <FloatingContact />
    </Router>
  );
}


export default App;
