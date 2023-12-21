import './SprayingTab.css';
import PlantingDivTotal from '../../pagecomponents/PlantingDivTotal';
import SectionDivTotal from '../../pagecomponents/SectionDivTotal';
import React from 'react'

function Spraying() {
  return (
    <div className='Spraying-tab'>
    <div className='Item-section'>
      <div className='Section-titles'>
        <h3>Plantings</h3>
        <h3>+ Plantings</h3>
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

export default Spraying