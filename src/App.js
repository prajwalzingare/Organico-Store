import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  NavBar,
  LandingPage,
  Footer,
  ProductListingPage,
  IndividualProduct,
  WishList,
} from "components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App body-container ">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:productId" element={<IndividualProduct />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={700} draggable />
      <Footer />
    </div>
  );
}

export default App;
