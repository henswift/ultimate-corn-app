import React, { useState } from 'react'
import axios from 'axios'
import './AddSections.css';

function AddSections() {
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
      const response = await axios.post('https://657a4ab21acd268f9afae0fa.mockapi.io/sections/', formData);

      setFormData({
        name: '',
        id: '',
      });
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
            <label htmlFor="sectionselect">ID</label>
            <input
              id='id'
              name='id'
              type='text'
              value={formData.id}
              onChange={handleInputChange}
            />
          </div>
          {/* Photo upload field */}
          {/* <div className='inputfield'>
            <label htmlFor="photoupload">Upload a Photo</label>
            <input
              id='photoupload'
              type="file"
              name="photo"
              value={formData.photo}
              onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })}
            />
          </div> */}
          {/* <div className='inputfield'>
            <label htmlFor="notes">Notes</label>
            <textarea
              id='notes'
              name='notes'
              value={formData.notes}
              onChange={handleInputChange}
            />
          </div> */}
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