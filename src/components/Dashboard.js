import React, { useEffect, useState } from 'react';
import { getVentasDiarias, getProductosMasVendidos, getClientesFrecuentes } from '../services/api';
import { Container, Typography, Grid, Paper } from '@mui/material';

const Dashboard = () => {
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
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6">Ventas Diarias</Typography>
            <ul>
              {ventasDiarias.map((venta) => (
                <li key={venta.fecha}>{venta.fecha} - ${venta.total}</li>
              ))}
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6">Productos Más Vendidos</Typography>
            <ul>
              {productosMasVendidos.map((producto) => (
                <li key={producto.nombre}>{producto.nombre} - {producto.total_vendido} unidades</li>
              ))}
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6">Clientes Frecuentes</Typography>
            <ul>
              {clientesFrecuentes.map((cliente) => (
                <li key={cliente.nombre}>{cliente.nombre} - {cliente.total_compras} compras</li>
              ))}
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;