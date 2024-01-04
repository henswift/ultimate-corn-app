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

  const [formData, setFormData] = useState({
    name: '',
    datePlanted: '',
    section: '',
    photo: null,
    notes: '',
  })


  const handleAddPlanting = () => {
    const newPlanting = {
      // content: taskContent,
      // Add other properties of the planting object as needed
    };
    dispatch({ type: 'addPlanting', payload: newPlanting });
  };   

  console.log(formData)

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
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value})}
            />
          </div>
          <div className='inputfield'>
            <label for="dateplanted">Date Planted</label>
            <input
              id='dateplanted'
              type="date"
              name='Date Planted'
              value={formData.datePlanted}
              onChange={(e) => setFormData({ ...formData, datePlanted: e.target.value})}
            />
          </div>
          <div className='inputfield'>
            <label for="sectionselect">Select a section</label>
            <select
             name="country" 
             id='sectionselect'
             value={formData.section}
             onChange={(e) => setFormData({ ...formData, section: e.target.value})}
             >
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
              value={formData.photo}
              onChange={(e) => setFormData({ ...formData, photo: e.target.ariaValueMin})}
            />
          </div>
          <div className='inputfield'>
            <label for="notes">Notes</label>
            <textarea
              id='notes'
              name='Notes'
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value})}
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
