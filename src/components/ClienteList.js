import React, { useEffect, useState } from 'react';
import { getClientes } from '../services/api';

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await getClientes();
        setClientes(response.data);
      } catch (error) {
        console.error('Error al obtener los clientes', error);
      }
    };
    fetchClientes();
  }, []);

  return (
    <div>
      <h2>Clientes Registrados</h2>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id_cliente}>
            {cliente.nombre} - {cliente.telefono} - {cliente.correo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClienteList;