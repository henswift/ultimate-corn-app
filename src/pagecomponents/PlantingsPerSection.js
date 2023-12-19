import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PlantingsPerSection({ match }) {
  const [section, setSection] = useState(null);

  useEffect(() => {
    const fetchSection = async () => {
      try {
        const response = await axios.get(`https://657a4ab21acd268f9afae0fa.mockapi.io/sections/${match.params.id}`);
        setSection(response.data);
      } catch (err) {
        console.error("Error fetching section:", err.message);
      }
    };

    fetchSection();
  }, [match.params.id]);

  if (!section) return <p>Loading...</p>;

  return (
    <div>
      <h2>{section.name}</h2>
      {/* Display the section details here */}
    </div>
  );
}

export default PlantingsPerSection;
