import './Appheader.css';
import React from 'react';
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
      navigate(-1);
    };

  return (
    <div className='Header'>
      <div className='Header-logo'>
        <button onClick={handleBackButtonClick}>Back</button>
        <h3 className='H-one'>Ultimate Corn App</h3>
        <h4> Built by Hen</h4>
      </div>
    </div>
  )
}

export default Header