import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../store/AppContext';


function ViewPlanting() {
    const { id } = useParams();
    const { app } = useContext(AppContext);
    const planting = app.plantings.find(p => p.id === id);

    return (
        <div>
            <h2>{planting?.name}</h2>
            <img src={planting?.image} alt="" />
        </div>
  )
}

export default ViewPlanting