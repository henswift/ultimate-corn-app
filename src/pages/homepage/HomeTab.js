import React from 'react';
import SearchPlantings from '../../pagecomponents/SearchPlantings';
import './HomeTab.css';

function HomeTab() {
  return (
    <div className='homeTab'>
        <div className='defaultBox'>
          <h3>Welcome to CornTop!</h3>
        </div>
        <SearchPlantings />
    </div>
  );
};

export default HomeTab