import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../store/AppContext';
import './AddSections.css';

// Displays the form for adding new sections.
function AddSections() {
  const { setApp } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    id: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancelButtonClick = () => {
    navigate(-1);
  };

  const handleAddSection = async () => {
    try {
      const sectionId = uuidv4();
      setFormData({
        ...formData,
        id: sectionId,
      });
      await axios.post('https://657a4ab21acd268f9afae0fa.mockapi.io/sections/', formData);
      setApp({ type: 'addSection', payload: formData });
      navigate('/planting');
    } catch (error) {
      console.error('Error adding plantings:', error.message);
    };
  };

  return (
    <div className='entireAddSectionsPage'>
      <div className="addSections">
        <form>
          <div className='inputField'>
            <label htmlFor="name">Name</label>
            <input
              id='name'
              name='name'
              type='text'
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className='sectionFooterElements'>
            <button type='button' onClick={handleCancelButtonClick}>Cancel</button>
            <button type="button" onClick={handleAddSection}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSections