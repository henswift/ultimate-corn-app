import React, { useState, useContext} from 'react';
import axios from 'axios';
import { AppContext } from '../store/AppContext';
import { useNavigate } from 'react-router-dom';
import './AddPlantings.css';

function AddPlantings() {
  const { setApp } = useContext(AppContext);
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
      [e.target.name]: e.target.value,
    });
  };

  const handleAddPlanting = async () => {
    try {
      await axios.post('https://657a4ab21acd268f9afae0fa.mockapi.io/sections/1/plantings/', formData);
      setApp({ type: 'addPlanting', payload: formData });
      navigate('/planting')
    } catch (error) {
      console.error('Error adding plantings:', error.message);
    }
  };

console.log(formData);

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
              <option value="1">USA</option>
              <option value="2">Canada</option>
              <option value="3">UK</option>
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
            <button>Cancel</button>
            <button type="button" onClick={handleAddPlanting}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPlantings;
