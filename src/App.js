import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar, LandingPage, Footer, ProductListingPage } from "components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
