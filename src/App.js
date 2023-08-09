
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown'
import Home from './components/pages/Home';


import Loginpage from './components/Loginpage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from './components/shop/shop';





function App() {
  return (


    <Router>
    <div>
      
    <Routes>
      <Route path="/" exact element={<Loginpage/>} />
      <Route path="/home" exact element={<Home/>} />
      <Route path="/shop" exact element={<Shop/>} />
    </Routes>


       

    </div>
    </Router>
       

        
        

      
  
  );
}

export default App;
