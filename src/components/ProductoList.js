import React, { useEffect, useState } from 'react';
import { getProductos } from '../services/api';

const ProductoList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await getProductos();
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener los productos', error);
      }
    };
    fetchProductos();
  }, []);

  return (
    <div>
      <h2>Inventario de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id_producto}>
            {producto.nombre} - Stock: {producto.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductoList;