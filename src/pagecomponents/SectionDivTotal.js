import React, { useState, useContext} from 'react';
import './SectionDivTotal.css';
import { AppContext } from '../store/AppContext';
import { Link } from 'react-router-dom';
import ViewSection from './ViewSection';

function SectionDivTotal() {
  const { app } = useContext(AppContext);
  const { sections } = app;
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className='Section-container'>
      {sections.map((section) => (
        <Link
          to={`/section/${section.id}`}
          key={section.id}
          onClick={() => setSelectedSection(section)}
        >
          <div className='Section-default-box'>
            <p>{section.name}</p>
            <img src={section.image} alt='section' />
          </div>
        </Link>
      ))}
      {selectedSection && <ViewSection section={selectedSection} />}
    </div>
  );
}

export default SectionDivTotal;