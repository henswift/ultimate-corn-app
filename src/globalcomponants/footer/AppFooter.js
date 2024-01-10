import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppFooter.css';

// Footer displayed on all pages.
function Footer() {
  return (
    <div className='footer'>
      <div className='footerLinks'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : 'inactive'}>
          <h4>Home</h4>
        </NavLink>
        <NavLink to="/planting" className={({ isActive }) => isActive ? 'active' : 'inactive'}>
          <h4>Planting</h4>
        </NavLink>
        <NavLink to="/spraying" className={({ isActive }) => isActive ? 'active' : 'inactive'}>
          <h4>Spraying</h4>
        </NavLink>
        <NavLink to="/picking" className={({ isActive }) => isActive ? 'active' : 'inactive'}>
          <h4>Picking</h4>
        </NavLink>
      </div>
    </div>
  )
};

export default Footer