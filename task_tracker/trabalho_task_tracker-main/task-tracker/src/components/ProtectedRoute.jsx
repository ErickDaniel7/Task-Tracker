import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Simulação de autenticação usando localStorage

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
