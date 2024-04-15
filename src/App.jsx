import '@fortawesome/fontawesome-free/css/all.min.css';


import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Juntador from "./Components/Templates/Juntador";
import ProductList from "./Components/Organismos/ProductList";
import ProductDetail from "./Components/Pages/ProductDetail";
import Login from "./Components/Organismos/Login";
import Register from "./Components/Organismos/Register";
import Checkout from "./Components/Pages/Checkout";
import ShippingForm from "./Components/Organismos/ShippingForm";
import Carrito from "./Components/Pages/Carrito";
import Servicios from "./Components/Pages/Favorito";
import Administrador from "./Components/Organismos/PapuAdmin";
import UserPorfile from "./Components/Organismos/UserPorfile";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/SHPForm" element={<ShippingForm/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:name" element={<ProductDetail />} />
          <Route path="/UserPorfile" element={<UserPorfile/>}/>
          <Route path="/contacto" element={<Carrito/>}/>
          <Route path="/servicios" element={<Servicios/>}/>
          <Route path="/administrador" element={<Administrador/>}/>
          <Route path="/" element={<Juntador />} />
        </Routes>
      </div>  
    </Router>
  );
}

export default App;
