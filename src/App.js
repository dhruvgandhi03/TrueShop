
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown'
import Home from './components/pages/Home';


import Loginpage from './components/Loginpage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from './components/shop/shop';
import Sidebar from './components/sidebar';







function App() {
 
 
  return (

    
    <Router>
    
      
      
    <Routes>

      <Route path="/Trueshop" exact element={<Loginpage/>} />
      {/* <Route path="/shop/sidebar" exact element={<Sidebar/>} /> */}
      
      <Route path="/home" exact element={<Home/>} />
      <Route path="/shop" exact element={<Shop/>} />
    </Routes>


       

    
    </Router>
       

        
        

      
  
  );
}

export default App;
