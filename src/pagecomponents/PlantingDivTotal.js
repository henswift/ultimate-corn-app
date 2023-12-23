import React, { useState, useContext } from 'react';
import './PlantingDivTotal.css';
import { AppContext } from '../store/AppContext';
import { Link } from 'react-router-dom';
import ViewPlanting from './ViewPlanting';

function PlantingDivTotal() {
  const { app } = useContext(AppContext);
  const { plantings } = app;
  const [selectedPlanting, setSelectedPlanting] = useState(null);

  return (
    <div className='Section-container'>
      {plantings.map((planting) => (
        <Link
          to={`/planting/${planting.id}`}
          key={planting.id}
          onClick={() => setSelectedPlanting(planting)}
        >
          <div className='Section-default-box'>
            <p>{planting.name}</p>
            <img src={planting.image} alt='corn' />
          </div>
        </Link>
      ))}
      {selectedPlanting && <ViewPlanting planting={selectedPlanting} />}
    </div>
  );
}

export default PlantingDivTotal;