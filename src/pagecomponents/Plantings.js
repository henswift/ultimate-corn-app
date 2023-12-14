import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Plantings() {
    const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://657a4ab21acd268f9afae0fa.mockapi.io/sections');
      setSections(response.data);
    };
    fetchData();
  }, []);

  console.log(sections);

  return (
    <div>
      {sections.map((section) => (
      <p key={section.id}>{section.name}</p>
      ))}
    </div>
  )
}

export default Plantings