import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landingpage from "./Common/Landingpage";
import Pnf from "./Common/Pnf";
import Adminheader from "./admin/Adminheader";
import Adminfooter from "./admin/Adminfooter";
import Adminhome from "./admin/Adminhome";
import Header from "./user/Header";
import Footer from "./user/Footer";
import Home from "./user/Home";
import Commonheader from "./Common/Commonheader";
import Userauth from "./user/Userauth";
import Login from "./Common/Login";
import About from "./Common/About";
import Contact from "./Common/Contact";
import Hotelhome from "./Hotel/Hotelhome";
import Vieworder from "./Hotel/Vieworder";
import Cart from "./user/Cart";
function App() {
  return (
    <>
      <Routes>
        {/* Common */}
        <Route path="/" element={<Landingpage />} />
        <Route path="*" element={<Pnf />} />
        <Route path="/login" element={<Login />} />
        <Route path="common-header" element={<Commonheader />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Admin */}
        <Route path="admin-header" element={<Adminheader />} />
        <Route path="admin-footer" element={<Adminfooter />} />
        <Route path="admin-home" element={<Adminhome />} />
        {/* user */}
        <Route path="user-header" element={<Header />} />
        <Route path="user-footer" element={<Footer />} />
        <Route path="user-home" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/user-login" element={<Userauth />} />
        <Route path="/user-register" element={<Userauth register />} />

        {/* Hotel */}
        <Route path="hotel-home" element={<Hotelhome />} />
        <Route path="view-order" element={<Vieworder />} />
      </Routes>
    </>
  );
}

export default App;
