// This page returns a section with all the field sections in them. 

import React, { useContext } from 'react';
import './PlantingDivTotal.css';
import { AppContext } from '../store/AppContext';
import { Link } from 'react-router-dom';

function SectionDivTotal() {

  const {app} = useContext(AppContext);
  const {sections} = app;

  return (
    <div className='Section-container'>
    {sections.map((section) => (
      <Link to={`/section/${section.id}`} key={section.id}>
        <div className='Section-default-box'>
          <p>{section.name}</p>
          <p>{section.id}</p>
        </div>
      </Link>
    ))}
  </div>
  )
}

export default SectionDivTotal