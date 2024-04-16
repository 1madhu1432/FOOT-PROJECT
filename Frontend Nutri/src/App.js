import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductInfor from "./pages/ProductInfor";
import ContactUs from "./pages/ContactUs";
import Aboutus from "./pages/AboutUs";
import OrderPage from "./pages/OrderPage";
import Admin from "./pages/Admin";

// import Home1 from "./pages/Home1";

// import Navbar from "./pages/Navbar";
// import Footer from "./pages/Footer";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      {/* <Route path="/navbar" element={<Navbar/>}/> */}
      {/* <Route path="/footer" element={<Footer/>}/> */}
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/products" element={<Products />} />
      <Route path="/productinfor" element={<ProductInfor />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/orderpage" element={<OrderPage />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
export default App;
