import React, { useEffect, useState } from 'react';
import { getVentasDiarias, getProductosMasVendidos, getClientesFrecuentes } from '../services/api';

const Reportes = () => {
  const [ventasDiarias, setVentasDiarias] = useState([]);
  const [productosMasVendidos, setProductosMasVendidos] = useState([]);
  const [clientesFrecuentes, setClientesFrecuentes] = useState([]);

  useEffect(() => {
    const fetchReportes = async () => {
      try {
        const ventas = await getVentasDiarias();
        const productos = await getProductosMasVendidos();
        const clientes = await getClientesFrecuentes();
        setVentasDiarias(ventas.data);
        setProductosMasVendidos(productos.data);
        setClientesFrecuentes(clientes.data);
      } catch (error) {
        console.error('Error al obtener los reportes', error);
      }
    };
    fetchReportes();
  }, []);

  return (
    <div>
      <h2>Reportes</h2>
      <div>
        <h3>Ventas Diarias</h3>
        <ul>
          {ventasDiarias.map((venta) => (
            <li key={venta.fecha}>{venta.fecha} - ${venta.total}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Productos Más Vendidos</h3>
        <ul>
          {productosMasVendidos.map((producto) => (
            <li key={producto.nombre}>{producto.nombre} - {producto.total_vendido} unidades</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Clientes Frecuentes</h3>
        <ul>
          {clientesFrecuentes.map((cliente) => (
            <li key={cliente.nombre}>{cliente.nombre} - {cliente.total_compras} compras</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reportes;