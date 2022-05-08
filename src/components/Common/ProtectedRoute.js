import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ element, authenticated, redirectTo, ...rest }) => {
  
  return authenticated ? <Outlet /> : <Navigate to="/" />;
 
};

export default ProtectedRoute;