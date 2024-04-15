import React from 'react'
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => (
    <Link className="link" to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {children}
    </Link>
  );

export default NavLink