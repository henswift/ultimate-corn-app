import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../store/AppContext';
import ViewPlanting from './ViewPlanting';
import './PlantingDivTotal.css';

// Retrieves all the plantings from the state and returns them in a div. 
function PlantingDivTotal() {
  const { app } = useContext(AppContext);
  const { plantings } = app;
  const [selectedPlanting, setSelectedPlanting] = useState(null);

  return (
    <div className='sectionContainer'>
      {plantings.map((planting) => (
        <Link
          to={`/planting/${planting.id}`}
          key={planting.id}
          onClick={() => setSelectedPlanting(planting)}
        >
          <div className='sectionDefaultBox'>
            <p>{planting.name}</p>
            <img src={planting.image} alt='corn' />
          </div>
        </Link>
      ))}
      {selectedPlanting && <ViewPlanting planting={selectedPlanting} />}
    </div>
  );
};

export default PlantingDivTotal;