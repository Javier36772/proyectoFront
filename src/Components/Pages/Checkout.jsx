import React, { useState } from 'react';
import imagen21 from '../images/image_21.jpg';
import NavBar from '../Organismos/Navbar';

const RegistroTarjeta = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholder, setCardholder] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const tarjetaData = {
      NumTarjeta: cardNumber,
      Fecha: expiry,
      Cvv: cvv,
      Titular: cardholder
    };

    try {
      const response = await fetch('http://34.232.253.16:3000/Tarjeta/tarjetas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarjetaData)
      });

      if (response.ok) {
        window.location.href = "/SHPForm";
      } else {
        console.error('Error al enviar los datos de la tarjeta:', response.statusText);
        // Manejo de errores (puedes mostrar un mensaje al usuario, por ejemplo)
      }
    } catch (error) {
      console.error('Error al enviar los datos de la tarjeta:', error.message);
      // Manejo de errores (puedes mostrar un mensaje al usuario, por ejemplo)
    }
  };

  return (
    <div style={containerStyles}>
      <NavBar/> 
      <div style={{...registroStyles, backgroundColor: '#333'}}>
        <h1 style={{ ...headingStyles, color: 'white', fontSize: '24px', marginBottom: '20px' }}>Datos de tarjeta</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ ...formGroupStyles, color: 'white' }}>
            <label htmlFor="cardNumber" style={{ fontSize: '14px' }}>Número de Tarjeta:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              style={{ fontSize: '14px', width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ ...formGroupStyles, display: 'flex', color: 'white', marginBottom: '20px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label htmlFor="expiry" style={{ fontSize: '14px' }}>MM/AA</label>
              <input
                type="text"
                id="expiry"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/AA"
                required
                style={{ fontSize: '14px', width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="cvv" style={{ fontSize: '14px' }}>CVV:</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength={3}
                required
                style={{ fontSize: '14px', width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>
          </div>
          <div style={{ ...formGroupStyles, color: 'white' }}>
            <label htmlFor="cardholder" style={{ fontSize: '14px' }}>Titular de la Tarjeta:</label>
            <input
              type="text"
              id="cardholder"
              value={cardholder}
              onChange={(e) => setCardholder(e.target.value)}
              required
              style={{ fontSize: '14px', width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <button type="submit" style={{ ...submitButtonStyles, fontSize: '14px', padding: '10px 20px' }}>Enviar</button>
        </form>
      </div>
      <div style={{...imageContainerStyles, backgroundColor: '#f0f0f0'}}>
        <img src={imagen21} alt="Imagen 21" style={imageStyles} />
      </div>
    </div>
  );
};
export default RegistroTarjeta;

const containerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start', 
  margin: 'auto',
  marginTop: '100px',
  borderRadius: '100%',
};

const registroStyles = {
  borderRadius: '10px',
  maxWidth: '550px',
  marginBottom: '40px',
  marginleft: '50px',
  margin: '0 auto',
};

const imageContainerStyles = {
  maxWidth: '500px',
  marginLeft: '20px',
  margin: '0 auto',
};

const headingStyles = {
  fontSize: '24px',
  
};

const formGroupStyles = {
  marginBottom: '20px',
  textAlign: 'left',
};

const submitButtonStyles = {
  backgroundColor: 'grey',
  color: 'white',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  width: '50%',
  margin: '0 auto',
};

const imageStyles = {
  width: '100%',
  height: 'auto',
};
