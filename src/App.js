import "./App.css";
import "./components/spec_deal/sd.css";
import "./components/profile/profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import Home from "./components/pages/Home";
import UserProfile from "./components/profile/userProfile";
import Specialdeals from "./components/spec_deal/specialdeals";
import Loginpage from "./components/Loginpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./components/shop/shop";
import Cart from "./cart/Cart";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Loginpage />} />
        <Route path="/userProfile" exact element={<UserProfile />} />
        <Route path="/Cart" exact element={<Cart />} />
        <Route path="/SpecialDeals" element={<Specialdeals />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
