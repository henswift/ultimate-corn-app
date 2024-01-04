import React, { useState, useReducer } from 'react';
import { appReducer } from '../store/appReducer.js';
import { initAppObject } from '../store/AppContext.js';
import './AddPlantings.css';
import { useNavigate } from "react-router-dom";

function AddPlantings() {

  // Back Button logic
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };


  const [dispatch] = useReducer(appReducer, initAppObject);
  const [name, setName] = useState('');
  const [datePlanted, setDatePlanted] = useState('');
  const [section, setSection] = useState('usa');
  const [photo, setPhoto] = useState(null); 
  const [notes, setNotes] = useState('');


  const handleAddPlanting = () => {
    const newPlanting = {
      content: taskContent,
      // Add other properties of the planting object as needed
    };
    dispatch({ type: 'addPlanting', payload: newPlanting });
  };   

  return (
    <div className='entireaddplantingspage'>
      <div className="addPlantings">
        <form>
          <div className='inputfield'>
            <label for="name">Name</label>
            <input
              id='name'
              name='name'
              type='text'
              value={taskContent}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='inputfield'>
            <label for="dateplanted">Date Planted</label>
            <input
              id='dateplanted'
              type="date"
              name='Date Planted'
              value={taskContent}
              onChange={(e) => setDatePlanted(e.target.value)}
            />
          </div>
          <div className='inputfield'>
            <label for="sectionselect">Select a section</label>
            <select name="country" id='sectionselect'>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="uk">UK</option>
            </select>
          </div>
          <div className='inputfield'>
            <label for="photoupload">Upload a Photo</label>
            <input 
              id='photoupload'
              type="file" 
              name="photo" 
            />
          </div>
          <div className='inputfield'>
            <label for="notes">Notes</label>
            <textarea
              id='notes'
              name='Notes'
              value={taskContent}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <div className='footerelements'>
            <button onClick={handleBackButtonClick}>Cancel</button>
            <button type="button" onClick={() => handleAddPlanting()}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPlantings;
