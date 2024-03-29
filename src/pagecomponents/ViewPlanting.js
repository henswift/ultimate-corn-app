import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../store/AppContext';
import './ViewPlanting.css';

function ViewPlanting() {
  const { id } = useParams();
  const { app, setApp } = useContext(AppContext);
  const planting = app.plantings.find((p) => p.id === id);
  const navigate = useNavigate();

  const handleDeletePlanting = async (plantingId) => {
    try {
      await axios.delete(`https://657a4ab21acd268f9afae0fa.mockapi.io/sections/1/plantings/${plantingId}`);
      setApp({ type: 'deletePlanting', payload: plantingId });
      navigate('/planting');
    } catch (error) {
      console.error('Error deleting planting:', error.message);
    };
  };

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="singlePlantingMain">
        <div className='singlePlantingSection'>
          <div className="singlePlantingText">
            <h2>{planting?.name}</h2>
            <h3>Date Planted</h3>
            <p>- Planted on {planting?.createdAt}</p>
            <h3>Notes</h3>
            <p>- {planting?.notes}</p>
            <h3>Section</h3>
            <p>- {planting?.sectionId}</p>
          </div>
          <div className="singlePlantingImage">
            <img src={planting?.image} alt="" />
          </div>
          <div className='singlePlantingFooter'>
            {/* <button onClick={() => setApp({type: 'plantingToEdit', payload: planting})}>Picking</button> */}
            <button onClick={() => handleDeletePlanting(planting.id)}>Delete</button>
            <button type='button' onClick={handleBackButtonClick}>Back</button>
          </div>
        </div>
    </div>
  );
};

export default ViewPlanting;
