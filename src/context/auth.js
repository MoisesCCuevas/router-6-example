import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const adminList = [
  'Gribu',
  'Tibu',
  'Gibu'
];

const AuthProvider = (props) => {
  const {
    children
  } = props;

  const [user, setUser] = useState(null);
  const [backFromLogin, setBackFromLogin] = useState('/profile');
  const navigate = useNavigate();

  const onLogin = (authUser) => {
    const isAdmin = adminList.find(admin => admin === authUser.name)
    setUser({...authUser, isAdmin });
    navigate(backFromLogin);
  }

  const onLogout = () => {
    setUser(null);
    navigate('/');
  }

  const auth = { user, onLogin, onLogout, setBackFromLogin }

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
