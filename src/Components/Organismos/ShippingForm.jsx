import React, { useState } from 'react';
import imagen19 from '../images/image_19.jpg';
import imagen20 from '../images/image_20.jpg';
import imagen21 from '../images/image_21.jpg';

const Contacto = () => {
  const [formData, setFormData] = useState({
    NumTarjeta: '',
    Fecha: '',
    Cvv: '',
    Titular: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://34.232.253.16:3000/Tarjeta/tarjetas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      alert('Datos enviados correctamente');
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar los datos');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <h1 style={{textAlign: "center", fontSize: "2.5em", marginTop: "50px", color:"#fff"}}>Gracias</h1>
      <div style={{display: "flex", justifyContent: "center", marginTop: "20px", maxWidth: "800px", margin: "0 auto"}}>
        <img src={imagen19} alt="Imagen 1" style={{marginRight: "10px", maxWidth: "33%"}}/>
        <img src={imagen20} alt="Imagen 2" style={{marginRight: "10px", maxWidth: "33%"}}/>
        <img src={imagen21} alt="Imagen 3" style={{maxWidth: "33%"}}/>
      </div>
     
      <p style={{textAlign: "center", fontSize: "1.5em", marginTop: "20px",color:"#fff"}}>Gracias por tu compra, aqui esta tu codigo: ELKJP-WQKHI-TCR89</p>
      <div style={{textAlign: "center", marginTop: "20px"}}>
      <button onClick={() => window.location.href = '/'} style={buttonStyles}>Volver</button>
      </div>
    </div>
  );
};

const buttonStyles = {
  backgroundColor: "#007bff",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Contacto;
