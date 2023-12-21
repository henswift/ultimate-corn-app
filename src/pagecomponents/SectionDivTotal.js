// Returns all the sections in a div.

import React, { useContext } from 'react';
import './SectionDivTotal.css';
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
          <img src={section.image} alt='section' />
        </div>
      </Link>
    ))}
  </div>
  )
}

export default SectionDivTotal