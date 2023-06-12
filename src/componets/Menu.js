import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', text: "Home"},
  { to: '/blog', text: "Blog"},
  { to: '/profile', text: "Profile"}
];

const Menu = () => {
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
        {routes.map(({ to, text }) => (
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
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
