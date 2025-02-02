import React, { useEffect, useState } from 'react';
import { getVentas } from '../services/api';

const VentaList = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const response = await getVentas();
        setVentas(response.data);
      } catch (error) {
        console.error('Error al obtener las ventas', error);
      }
    };
    fetchVentas();
  }, []);

  return (
    <div>
      <h2>Ventas Registradas</h2>
      <ul>
        {ventas.map((venta) => (
          <li key={venta.id_venta}>
            {venta.fecha} - {venta.cliente} - ${venta.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VentaList;