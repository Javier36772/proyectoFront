
import React from "react";

import products from '../data/productData';
import ProductCard from '../Moleculas/ProductCard';
import CustomText from '../atomos/Text';
import NavBar from '../Organismos/Navbar'; 
import "../Pages/styles/PokemonList.css"; 

function PokemonProductList() {


  const pokemonProducts = products.filter((product) => product.Fav === 'Si');

  return (
    <div>
      <NavBar /> 
      <div className="custom-product-list">
        <CustomText className="product-list-title">Carrito</CustomText>
        <div className="custom-product-row">
          {pokemonProducts.map((product, index) => (
            <ProductCard
              key={index}
              productName={product.name}
              price={product.price}
              imageSrc={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonProductList;
