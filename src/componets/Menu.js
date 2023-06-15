import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const routes = [
  { to: '/', text: "Home", priv: false, pub: false },
  { to: '/blog', text: "Blog", priv: false, pub: false },
  { to: '/profile', text: "Profile", priv: true, pub: false },
  { to: '/login', text: "Login", priv: false, pub: true },
  { to: '/logout', text: "Logout", priv: true, pub: false }
];

const Menu = () => {
  const { user } = useAuth();
  return (
    <nav>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li> */}
        {routes.map(({ to, text, priv, pub }) => {
          if ((priv && !user) || (pub && user)) return null;
          return (
            <li key={to}>
              <NavLink
                to={to}
                //className={({ isActive }) => ''}
                style={
                  ({ isActive }) => ({ color: isActive ? 'red' : 'blue'})
                }
              >
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;
