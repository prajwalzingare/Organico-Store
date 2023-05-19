import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  NavBar,
  LandingPage,
  Footer,
  ProductListingPage,
  IndividualProduct,
} from "components";

function App() {
  return (
    <div className="App body-container ">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:productId" element={<IndividualProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
