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
    }
  };

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleEditButtonClick = () => {
    setApp({ type: 'plantingToEdit', payload: planting });
  };

  const handleSaveChanges = async () => {
    try {
      // Make an API request to update the planting
      await axios.put(`https://657a4ab21acd268f9afae0fa.mockapi.io/sections/1/plantings/${app.editingPlanting.id}`, {
        // Include the updated fields from your form or state
        // For example: name, createdAt, notes, sectionId, image, etc.
      });

      setApp({ type: 'updatePlanting', payload: app.editingPlanting });
      setApp({ type: 'plantingToEdit', payload: null });
      navigate('/planting');

    } catch (error) {
      console.error('Error updating planting:', error.message);
    }
  };
  

  return (
    <div className="singlePlantingMain">
      <div className='singlePlantingSection'>
        {app.editingPlanting ? (
          <div className="editingFields">
            {/* Render your editing fields and form components here */}
            {/* You can use values from app.editingPlanting to pre-fill the fields */}
            <button onClick={handleSaveChanges}>Save Changes</button>
          </div>
        ) : (
          <div className="singlePlantingText">
            <h2>{planting?.name}</h2>
            <h3>Date Planted</h3>
            <p>- Planted on {planting?.createdAt}</p>
            <h3>Notes</h3>
            <p>- {planting?.notes}</p>
            <h3>Section</h3>
            <p>- {planting?.sectionId}</p>
          </div>
        )}

        <div className="singlePlantingImage">
          <img src={planting?.image} alt="" />
        </div>
        
        <div className='singlePlantingFooter'>
          <button onClick={handleEditButtonClick}>Edit</button>
          <button onClick={() => handleDeletePlanting(planting.id)}>Delete</button>
          <button type='button' onClick={handleBackButtonClick}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default ViewPlanting;
