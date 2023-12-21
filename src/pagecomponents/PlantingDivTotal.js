// Returns all the plantings into a div. 

import React, { useContext } from 'react';
import './PlantingDivTotal.css';
import { AppContext } from '../store/AppContext';
import { Link } from 'react-router-dom';

function PlantingDivTotal() {
  
  const { app } = useContext(AppContext);
  const { plantings } = app;

  return (
    <div className='Section-container'>
      {plantings.map((planting) => (
        <Link to={`/plantings/${planting.id}`} key={planting.id}>
          <div className='Section-default-box'>
            <p>{planting.name}</p>  
            <img src={planting.image} alt='corn' />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PlantingDivTotal;
