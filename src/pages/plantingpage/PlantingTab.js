import './PlantingTab.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Planting() {

  const [plantings, setPlantings] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      const response = await axios.get('https://657a4ab21acd268f9afae0fa.mockapi.io/sections');
      setPlantings(response.data);
    };
    fetchData();
  }, []);

  console.log(plantings);

  return (
    <div className='Home-tab'>
      planting
      </div>
  )
}

export default Planting