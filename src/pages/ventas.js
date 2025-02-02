import React, { useEffect, useState } from 'react';
import { getVentas } from '../services/api';

const Ventas = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    getVentas()
      .then((response) => setVentas(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Ventas</h1>
      <ul>
        {ventas.map((venta) => (
          <li key={venta.id_venta}>{venta.total}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ventas;