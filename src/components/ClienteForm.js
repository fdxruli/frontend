import React, { useState } from 'react';
import { registerCliente } from '../services/api';

const ClienteForm = () => {
  const [clienteData, setClienteData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerCliente(clienteData);
      alert('Cliente registrado con éxito');
    } catch (error) {
      console.error('Error al registrar el cliente', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Cliente</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={clienteData.nombre}
          onChange={(e) => setClienteData({ ...clienteData, nombre: e.target.value })}
        />
      </div>
      <div>
        <label>Teléfono:</label>
        <input
          type="text"
          value={clienteData.telefono}
          onChange={(e) => setClienteData({ ...clienteData, telefono: e.target.value })}
        />
      </div>
      <div>
        <label>Correo:</label>
        <input
          type="email"
          value={clienteData.correo}
          onChange={(e) => setClienteData({ ...clienteData, correo: e.target.value })}
        />
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default ClienteForm;