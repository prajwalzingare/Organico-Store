import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar, LandingPage } from "components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
