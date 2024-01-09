import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../store/AppContext';
import './AddSections.css';

function AddSections() {
  const { setApp } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    id: '',
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSection = async () => {
    try {
      await axios.post('https://657a4ab21acd268f9afae0fa.mockapi.io/sections/', formData);
      setApp({ type: 'addSection', payload: formData });
      navigate('/planting');
    } catch (error) {
      console.error('Error adding plantings:', error.message);
    }
  };

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
            <label htmlFor="sectionselect">ID</label>
            <input
              id='id'
              name='id'
              type='text'
              value={formData.id}
              onChange={handleInputChange}
            />
          </div>
          <div className='footerelements'>
            <button>Cancel</button>
            <button type="button" onClick={handleAddSection}>Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddSections