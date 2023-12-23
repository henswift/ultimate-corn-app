import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../store/AppContext';
import './ViewPlanting.css'


function ViewPlanting() {
    const { id } = useParams();
    const { app } = useContext(AppContext);
    const planting = app.plantings.find(p => p.id === id);

    return (
        <div className='singlePlantingMain'>
            <div className='singlePlantingText'>
                <h2>{planting?.name}</h2>
                <h3>Date Planted</h3>
                <p>- Planted on {planting?.createdAt}</p>
                <h3>Notes</h3>
                <p>- {planting?.notes}</p>
                <h3>Section</h3>
                <p>- {planting?.sectionId}</p>
            </div>
            <div className='singlePlantingImage'>
                <img src={planting?.image} alt="" />
            </div>
        </div>
  )
}

export default ViewPlanting