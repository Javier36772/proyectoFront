import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Image from "../atomos/Image";
import Text from "../atomos/Text";
import products from "../data/productData";
import "./styles/ProductDetails.css";

function ProductDetail() {
  const { name } = useParams();
  const product = products.find((product) => product.name === name);
  const navigate = useNavigate();
  const [heartColor, setHeartColor] = useState("far");

  const handleHeartClick = () => {
    if (heartColor === "far") {
      setHeartColor("fas");
    } else {
      setHeartColor("far");
    }
  };

  if (!product) {
    return <Text className="error-text">Producto no encontrado</Text>;
  }

  const handleBuyNow = () => {
    // Muestra la alerta
    window.alert("Para comprar, primero inicia sesión.");

    // Redirige al usuario al login
    navigate("/login");
  };

  const handleAddToCart = () => {
    // Realiza la acción de añadir al carrito
    console.log("Añadiendo producto al carrito...");
  };

  const handleRegionChange = (region) => {
    const regionPrices = product.prices;
    const price = regionPrices[region];
    product.price = price;
    updatePrice();
  };

  const updatePrice = () => {
    const priceElement = document.querySelector(".product-price");
    priceElement.textContent = `$${product.price}`;
  };

  return (
    <div className="product-detail">
      <div className="product-image-container">
        <Image src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <Text className="product-name">{product.name}</Text>
        <li><i className={`fas ${heartColor} fa-heart`} style={{ color: heartColor === 'fas'? '#ff0000' : '#ffffff' }} onClick={handleHeartClick}></i></li>
        <Text className="product-price">Precio: {product.price}</Text>
        <div className="product-region"> 
        <button className="btn-global" onClick={() => handleRegionChange("Global")}>
          Global
        </button>
        <button className="btn-latam" onClick={() => handleRegionChange("LATAM")}>
          LATAM
        </button>
        <button className="btn-turkey" onClick={() => handleRegionChange("Turkey")}>
          Turkey
        </button>
        <button className="btn-argentina" onClick={() => handleRegionChange("Argentina")}>
          Argentina
        </button>
        </div>
        
        {product.cantidad && (
          <Text className="product-quantity">Cantidad disponible: {product.cantidad}</Text>
        )}
        <Text className="product-description">Description: {product.det}</Text>
        <div className="product-buttons">
          <button className="btn-buy-now" onClick={handleBuyNow}>
            Comprar
          </button>
          <button className="btn-add-to-cart" onClick={handleAddToCart}>
            Añadir al carrito
          </button>
          
        </div>
      </div>
    </div>
  );
}

// Función para comprobar si el usuario está autenticado
const isAuthenticated = () => {
  // Comprueba si el usuario está autenticado
  // Por ejemplo, comprobar si existe un token en el localStorage
  const token = localStorage.getItem("token");

  if (token) {
    return true;
  } else {
    return false;
  }
};

export default ProductDetail;