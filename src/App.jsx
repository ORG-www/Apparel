import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Phone from "./pages/SignIN";
import OTP from "./pages/OTP";
import Verified from "./pages/Verified";
import Onboarding from "./pages/Onboarding";
import SignIN from "./pages/SignIN";


const App = () => {
 const user  = useSelector((state) => state.user.currentUser);
 return (
 <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path ="/login" element= {user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
      <Route path="/success" element={<Success />} />
      <Route path="/signIN" element={<SignIN/>} />
      {/* {/* <Route path="/phone" element={<Phone />} /> */}
      <Route path="/otp" element={<OTP/>} /> 
      <Route path="/verified" element={<Verified/>} />
       <Route path="/onboarding" element={<Onboarding/>} />

    </Routes>
  </Router>
 )
};

export default App;