import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AuthRoute = ({ children }) => {
  const { user, setBackFromLogin } = useAuth();
  const location = useLocation();

  useEffect(() => () => {
    if (!user) {
      setBackFromLogin(location.pathname);
    }
  }, [location, setBackFromLogin, user]);

  if (!user) return <Navigate to="/login" />

  return children;
}

export default AuthRoute;
