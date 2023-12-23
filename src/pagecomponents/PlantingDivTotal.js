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
    <div className='Planting-tab'>
      <div className='Item-section'>
        <div className='Section-titles'>
          <h3>Plantings</h3>
          <h3>+ Plantings</h3>
        </div>
        <div className='Section-contents'>
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
      </div>
    </div>
  );
}

export default PlantingDivTotal;