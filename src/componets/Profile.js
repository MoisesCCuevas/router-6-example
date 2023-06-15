import React from 'react';
import useAuth from '../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();

  return (
    <>
      <h1>Profile</h1>
      <p>{`Username: ${user.name}`}</p>
      <p>{user.isAdmin ? 'Admin' : 'User'}</p>
    </>
  );
}

export default Profile;
