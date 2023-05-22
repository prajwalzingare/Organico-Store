import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  NavBar,
  LandingPage,
  Footer,
  ProductListingPage,
  IndividualProduct,
  WishList,
  LoginForm,
  SignupForm,
} from "components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App body-container ">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />

        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:productId" element={<IndividualProduct />} />

        {/* this should be in private route  */}
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={700} draggable />
      <Footer />
    </div>
  );
}

export default App;
