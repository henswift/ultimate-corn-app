import React, { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../store/AppContext';
import ViewSection from './ViewSection';
import './SectionDivTotal.css';

// Retrieves all the sections from the state and returns them in a div.
function SectionDivTotal() {
  const { app } = useContext(AppContext);
  const { sections } = app;
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className='sectionContainer'>
      {sections.map((section) => (
        <Link
          to={`/section/${section.id}`}
          key={section.id}
          onClick={() => setSelectedSection(section)}
        >
          <div className='sectionDefaultBox'>
            <p>{section.name}</p>
            <img src={section.image} alt='section' />
          </div>
        </Link>
      ))}
      {selectedSection && <ViewSection section={selectedSection} />}
    </div>
  );
};

export default SectionDivTotal;