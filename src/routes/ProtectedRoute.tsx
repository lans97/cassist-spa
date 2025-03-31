import React, { JSX, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthUser } from '../hooks/useAuthUser';

interface ProtectedRouteProps {
    element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const { user, isAuthChecked } = useAuthUser();

    if (!isAuthChecked) {
        return <div>Loading...</div>;
    }

    return user ? element : <Navigate to={"/"}/>;
}

export default ProtectedRoute;
