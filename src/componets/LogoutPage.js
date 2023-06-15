import React from 'react';
import useAuth from '../hooks/useAuth';

const Logout = () => {
  const { onLogout: logout } = useAuth();

  const onLogout = (e) => {
    e.preventDefault();
    logout();
  }

  return (
    <>
      <h1>Logout</h1>
      <form onSubmit={onLogout}>
        <label>¿Está segur@?</label>
        <button type="submit">Logout</button>
      </form>
    </>
  );
}

export default Logout;
