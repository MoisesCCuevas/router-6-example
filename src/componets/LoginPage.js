import React, { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {  
  const { onLogin: login, user } = useAuth();
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    name: '',
    pass: ''
  });

  useEffect(() => {
    if (user) navigate('/profile');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeInput = (e, input) => {
    setUserLogin({
      ...userLogin,
      [input]: e.target.value
    });
  }

  const onLogin = (e) => {
    e.preventDefault();
    login(userLogin);
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={onLogin}>
        <label>Usuario:</label>
        <input
          value={userLogin.name}
          onChange={e => onChangeInput(e, 'name')}
        />
        <label>Contraseña:</label>
        <input
          value={userLogin.pass}
          type="password"
          onChange={e => onChangeInput(e, 'pass')}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
