import React, { useState } from 'react';
import TILINEITOR from '../images/TILINEITOR.jpeg';
import Banner from '../images/BannerU.png';
import ProductData from '../data/productData';
import './styles/UserPorfile.css';



function UserProfile() {
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState('');

  // Filter ProductData to only include games with 'Carrito': 'Si'
  const purchasedGames = ProductData.filter((product) => product.Carrito === 'Si');

  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      content: newPostContent,
      date: new Date().toLocaleDateString(),
      image: newPostImage,
    };
    // You can add the new post to a state or send it to a server here
    setNewPostContent('');
    setNewPostImage('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPostImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="user-profile-container">
      <div className="banner-container">
        <img src={Banner} alt="Banner" className="banner-image" />
      </div>
      <div className="profile-image-container">
        <img src={TILINEITOR} alt="Profile" className="profile-image" />
      </div>
      <div className="user-profile-info">
        <h1>Tilineitor Sanchez</h1>
        <p>Suchiapa, Chiapas</p>
        <hr />
        <h3>Descripción del perfil</h3>
        <p>Me encanta el tilin y el niño del oxxo, diavlo, que piquete la chamaquita</p>
      </div>
      <div className="credit-cards-container">
        <h2>Tarjetas de crédito</h2>
        <div className="credit-cards">
          <div className="credit-card">
            <i className="fas fa-credit-card"></i>
            <div className="card-info">
              <p>**** **** **** 1234</p>
              <p>Visa</p>
            </div>
          </div>
          <div className="credit-card">
            <i className="fas fa-credit-card"></i>
            <div className="card-info">
              <p>**** **** **** 5678</p>
              <p>Mastercard</p>
            </div>
          </div>
        </div>
      </div>
      <div className="purchased-games-container">
        <h2>Juegos comprados</h2>
        <div className="purchased-games">
            
          {purchasedGames.map((game) => (
            
            <div key={game.name} className="purchased-game">
                
              <img src={game.image} alt={game.name} />
              <h3>{game.name}</h3>
              <p>{game.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;