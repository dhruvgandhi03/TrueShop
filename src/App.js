import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import Home from "./components/pages/Home";

import Specialdeals from "./components/spec_deal/specialdeals";
import Loginpage from "./components/Loginpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./components/shop/shop";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Trueshop" exact element={<Loginpage />} />
        <Route path="/SpecialDeals" element={<Specialdeals />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
