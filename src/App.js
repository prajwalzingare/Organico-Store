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
  MockApi,
  UserProfile,
  PrivateRoute,
  Cart,
} from "components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App body-container ">
      <NavBar />
      <Routes>
        <Route path="/mock-man" element={<MockApi />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:productId" element={<IndividualProduct />} />

        {/* When the URL matches "/", the <PrivateRoute /> component will be rendered. The <PrivateRoute /> component is responsible for handling private routes. However, it does not render any specific content itself. Instead, it serves as a wrapper component that conditionally renders its child routes based on the authentication status. */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/profile" element={<UserProfile />} />
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" autoClose={700} draggable />
      <Footer />
    </div>
  );
}

export default App;
