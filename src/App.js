import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import VentaForm from './components/VentaForm';
import VentaList from './components/VentaList';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/ventas"
          element={
            <PrivateRoute>
              <VentaForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/lista-ventas"
          element={
            <PrivateRoute>
              <VentaList />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;