import React from 'react';
import { useNavigate } from "react-router-dom";
import './Appheader.css';

// Header displayed on all pages. 
function Header() {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className='header'>
      <div className='headerLogo'>
        <button onClick={handleBackButtonClick}>Back</button>
        <h3 className='hOne'>Ultimate Corn App</h3>
        <a href='https://henweaver.com' target='blank' rel='noopener noreferrer'>
          <h5> Built by Hen</h5>
        </a>
      </div>
    </div>
  )
};

export default Header