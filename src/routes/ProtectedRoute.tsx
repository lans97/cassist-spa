import React, { JSX } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const isAuthenticated = localStorage.getItem("user") !== null;
    return isAuthenticated ? element : <Navigate to="/" />
}

export default ProtectedRoute;
