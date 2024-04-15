
import React, { useState, useEffect } from 'react';
import NavBar from '../Organismos/Navbar';

function PurchaseHistory() {
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lógica para obtener el historial de compras
    fetchPurchaseHistory();
  }, []);

  const fetchPurchaseHistory = () => {
    // Simulación de datos de historial de compras
    const dummyData = [
      { id: 1, date: '2023-01-01', gameName: 'Juego 1', price: '$20' },
      { id: 2, date: '2023-02-01', gameName: 'Juego 2', price: '$30' },
      { id: 3, date: '2023-03-01', gameName: 'Juego 3', price: '$25' }
    ];
    setPurchaseHistory(dummyData);
    setLoading(false);
  };

  return (
    <div>
      <NavBar/>
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px', color: "#FFF" }}>Historial de Compras</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', color: "#FFF"}}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Fecha de Compra</th>
              <th style={tableHeaderStyle}>Nombre del Juego</th>
              <th style={tableHeaderStyle}>Precio</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3" style={tableCellStyle}>Cargando historial de compras...</td>
              </tr>
            ) : (
              purchaseHistory.map((purchase) => (
                <tr key={purchase.id}>
                  <td style={tableCellStyle}>{purchase.date}</td>
                  <td style={tableCellStyle}>{purchase.gameName}</td>
                  <td style={tableCellStyle}>{purchase.price}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const tableHeaderStyle = {
  padding: '10px',
  backgroundColor: '#333',
  color: 'white',
};

const tableCellStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

export default PurchaseHistory;