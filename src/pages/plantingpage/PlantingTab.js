import PlantingDivTotal from '../../pagecomponents/PlantingDivTotal';
import './PlantingTab.css';
import React from 'react';

function PlantingTab() {
  return (
    <div className='Planting-tab'>
      <div className='Item-section'>
        <div className='Section-titles'>
          <h3>Sections</h3>
          <h3>+ Section</h3>
        </div>
        <div className='Section-contents'>
          <PlantingDivTotal />
        </div>
      </div>
    </div>
  )
}

export default PlantingTab