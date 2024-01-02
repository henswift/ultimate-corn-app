import PlantingDivTotal from '../../pagecomponents/PlantingDivTotal';
import SectionDivTotal from '../../pagecomponents/SectionDivTotal';
import './PlantingTab.css';
import React from 'react';

// const handleAddPlanting = () => {
//   Navigate('/add-planting')
// }

function PlantingTab() {
  return (
    <div className='Planting-tab'>
      <div className='Item-section'>
        <div className='Section-titles'>
          <h3>Plantings</h3>
          {/* <h3 onClick={handleAddPlanting}>+ Plantings</h3> */}
        </div>
        <div className='Section-contents'>
          <PlantingDivTotal />
        </div>
      </div>
      <div className='Item-section'>
        <div className='Section-titles'>
          <h3>Sections</h3>
          <h3>+ Section</h3>
        </div>
        <div className='Section-contents'>
          <SectionDivTotal />
        </div>
      </div>
    </div>
  )
}

export default PlantingTab