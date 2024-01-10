import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlantingDivTotal from '../../pagecomponents/PlantingDivTotal';
import SectionDivTotal from '../../pagecomponents/SectionDivTotal';
import './PlantingTab.css';

function PlantingTab() {
  const navigate = useNavigate();

  const handleAddPlanting = () => {
    navigate('/add-planting')
  };

  const handleAddSection = () => {
    navigate('/add-section')
  };
  
  return (
    <div className='plantingTab'>
       <div className='itemSection'>
        <div className='sectionTitles'>
          <h3>Sections</h3>
          <button onClick={handleAddSection}>+ Section</button>
        </div>
        <div className='sectionContents'>
          <SectionDivTotal />
        </div>
      </div>
      <div className='itemSection'>
        <div className='sectionTitles'>
          <h3>Plantings</h3>
          <button onClick={handleAddPlanting}>+ Planting</button>
        </div>
        <div className='sectionContents'>
          <PlantingDivTotal />
        </div>
      </div>
    </div>
  );
};

export default PlantingTab