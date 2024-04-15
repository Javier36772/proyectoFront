import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function GameUnlocker() {
  const [gameName, setGameName] = useState('');
  const [gamePrice, setGamePrice] = useState('');
  const [gameAccount, setGameAccount] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [gameTitles, setGameTitles] = useState([]);

  useEffect(() => {
    const fetchGameTitles = async () => {
      try {
        const response = await fetch('http://34.232.253.16:3000/Gamess/games');
        if (response.ok) {
          const data = await response.json();
          setGameTitles(data);
        } else {
          console.error('Error al obtener los juegos');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    fetchGameTitles();
  }, []);

  const handleAddGame = async () => {
    try {
      const gameData = {
        Nombre: gameName,
        Precio: gamePrice,
        Cuenta: gameAccount,
        Imagen: selectedImage
      };
  
      const response = await fetch('http://34.232.253.16:3000/Gamess/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(gameData)
      });
  
      if (response.ok) {
        alert('Juego agregado correctamente');
        const newGameTitles = [...gameTitles, { name: gameName, price: gamePrice, account: gameAccount, image: selectedImage }];
        setGameTitles(newGameTitles);
        setGameName('');
        setGamePrice('');
        setGameAccount('');
        setSelectedImage('');
      } else {
        alert('Error al agregar el juego');
        console.error('Error al agregar el juego');
      }
    } catch (error) {
      alert('Error de red');
      console.error('Error de red:', error);
    }
  };
  
  
  return (
    <div>
      <div style={{ margin: '0', padding: '0', fontFamily: 'Arial, sans-serif', color: "#fff" }}>
        <div style={{ width: '100%', backgroundColor: '#D9D9D9', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: '#3E3E3E', border: 'none', color: 'white', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '5px', marginRight: '10px' }}>Volver</button>
            </Link>
            <h1 style={{ textAlign: 'center', padding: '20px 0', fontSize: '40px', marginBottom: '20px', flex: 1 }}>Game Unlocker</h1>
            <div style={{ width: '100px' }}></div>
          </div>
          <input
            type="text"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            style={{ width: '300px', padding: '10px', fontSize: '16px', marginBottom: '20px', textAlign: 'center', }}
            placeholder="Nombre del juego"
          />
          <input
            type="text"
            value={gamePrice}
            onChange={(e) => setGamePrice(e.target.value)}
            style={{ width: '300px', padding: '10px', fontSize: '16px', marginBottom: '20px', textAlign: 'center', }}
            placeholder="Precio del juego"
          />
          <input
            type="text"
            value={gameAccount}
            onChange={(e) => setGameAccount(e.target.value)}
            style={{ width: '300px', padding: '10px', fontSize: '16px', marginBottom: '20px', textAlign: 'center', }}
            placeholder="Region del juego"
          />
          <input
            type="file"
            onChange={(e) => setSelectedImage(e.target.files[0])}
            style={{ width: '300px', padding: '10px', fontSize: '16px', marginBottom: '20px', textAlign: 'center', }}
            placeholder="Imagen del dispositivo"
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              style={{ backgroundColor: '#3E3E3E', border: 'none', color: 'white', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '5px', marginRight: '10px' }}
              onClick={handleAddGame}
            >
              Agregar
            </button>
          </div>
          <table style={{ width: '90%', margin: '0 auto', borderCollapse: 'collapse', textAlign: 'center' }}>
            <thead>
              <tr>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Nombre</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Precio</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Region</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {gameTitles.map((game, index) => (
                <tr key={index}>
                  <td style={{ padding: '10px', border: '1px solid #ccc' }}>{game.Nombre}</td>
                  <td style={{ padding: '10px', border: '1px solid #ccc' }}>{game.Precio}</td>
                  <td style={{ padding: '10px', border: '1px solid #ccc' }}>{game.Cuenta}</td>
                  <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                    {
                      game.Imagen ? (
                        <img src={game.Imagen} alt={game.Nombre} style={{ maxWidth: '100px' }} />
                      ) : (
                        'No image'
                      )
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default GameUnlocker;
