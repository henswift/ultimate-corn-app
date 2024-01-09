import React, { useState, useContext} from 'react';
import axios from 'axios';
import { AppContext } from '../store/AppContext';
import { useNavigate } from 'react-router-dom';
import './AddPlantings.css';

function AddPlantings() {
  const { app, setApp } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    datePlanted: '',
    section: '',
    notes: '',
  });


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      sectionId: formData.section,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddPlanting = async () => {
    try {
      await axios.post(`https://657a4ab21acd268f9afae0fa.mockapi.io/sections/${formData.sectionId}/plantings`, formData);
      setApp({ type: 'addPlanting', payload: formData });
      navigate('/planting')
    } catch (error) {
      console.error('Error adding plantings:', error.message);
    }
  };

  const handleCancelButtonClick = () => {
    navigate(-1);
  }

  return (
    <div className='entireaddplantingspage'>
      <div className="addPlantings">
        <form>
          <div className='inputfield'>
            <label htmlFor="name">Name</label>
            <input
              id='name'
              name='name'
              type='text'
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className='inputfield'>
            <label htmlFor="dateplanted">Date Planted</label>
            <input
              id='dateplanted'
              type="date"
              name='datePlanted'
              value={formData.datePlanted}
              onChange={handleInputChange}
            />
          </div>
          <div className='inputfield'>
            <label htmlFor="sectionselect">Select a section</label>
            <select
              name="section"
              id='sectionselect'
              value={formData.section}
              onChange={handleInputChange}
            >
             {Array.isArray(app.sections) && app.sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.name}
                </option>
              ))}
            </select>
          </div>
          <div className='inputfield'>
            <label htmlFor="notes">Notes</label>
            <textarea
              id='notes'
              name='notes'
              value={formData.notes}
              onChange={handleInputChange}
            />
          </div>
          <div className='footerelements'>
            <button type='button' onClick={handleCancelButtonClick}>Cancel</button>
            <button type="button" onClick={handleAddPlanting}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPlantings;
