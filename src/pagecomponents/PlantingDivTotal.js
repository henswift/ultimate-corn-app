import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './PlantingDivTotal.css';

function PlantingDivTotal() {
  const [sections, setSections] = useState([]);
  const [plantings, setPlantings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://657a4ab21acd268f9afae0fa.mockapi.io/sections/');
        setSections(response.data);
      } catch (err){
        console.error("Error fetching data:", err.message);
      }

    };
    fetchData();
  }, []);

  console.log(sections);


  return (
    <div>
      {sections.map((section) => (
        <div key={section.id} className='Section-default-box'>
          <p>{section.name}</p>
          <p>{section.id}</p>
        </div>
      ))}
    </div>
  )
}

export default PlantingDivTotal