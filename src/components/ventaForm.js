import React, { useState } from 'react';
import { registerVenta } from '../services/api';

const VentaForm = () => {
  const [ventaData, setVentaData] = useState({
    id_cliente: '',
    total: 0,
    detalles: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerVenta(ventaData);
      alert('Venta registrada con éxito');
    } catch (error) {
      console.error('Error al registrar la venta', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Venta</h2>
      <div>
        <label>Cliente:</label>
        <input
          type="text"
          value={ventaData.id_cliente}
          onChange={(e) => setVentaData({ ...ventaData, id_cliente: e.target.value })}
        />
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default VentaForm;