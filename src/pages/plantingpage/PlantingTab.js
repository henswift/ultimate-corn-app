import './PlantingTab.css';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Planting() {

  const [plantings, setPlantings] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      const response = await axios.get('https://657a4ab21acd268f9afae0fa.mockapi.io/');
      console.log(response.data);
      setPlantings(response.data);
    };
    fetchData();
  }, []);


  return (
    <div className='Home-tab'>
      <Planting />
      </div>
  )
}

export default Planting