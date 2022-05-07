
import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = () => (
  <nav className='nav'>
    <NavLink to="/" activeClassName="active" end>
      Products
    </NavLink>
    <NavLink
      to="/admin"
      activeClassName="active"
      activeStyle={{ fontStyle: 'italic', fontWeight: 900 }}
    >
      Admin
    </NavLink>
  </nav>
)

export default Nav;
