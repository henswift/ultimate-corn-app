import PlantingDivTotal from '../../pagecomponents/PlantingDivTotal';
import SectionDivTotal from '../../pagecomponents/SectionDivTotal';
import './PlantingTab.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';


function PlantingTab() {

  const navigate = useNavigate();

  const handleAddPlanting = () => {
    navigate('/add-planting')
  }

  const handleAddSection = () => {
    navigate('/add-section')
  }
  
  return (
    <div className='Planting-tab'>
       <div className='Item-section'>
        <div className='Section-titles'>
          <h3>Sections</h3>
          <button onClick={handleAddSection}>+ Section</button>
        </div>
        <div className='Section-contents'>
          <SectionDivTotal />
        </div>
      </div>
      <div className='Item-section'>
        <div className='Section-titles'>
          <h3>Plantings</h3>
          <button onClick={handleAddPlanting}>+ Planting</button>
        </div>
        <div className='Section-contents'>
          <PlantingDivTotal />
        </div>
      </div>
    </div>
  )
}

export default PlantingTab