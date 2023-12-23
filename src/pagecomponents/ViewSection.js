import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../store/AppContext';
import './ViewSection.css'

function ViewSection() {
    const { id } = useParams();
    const { app } = useContext(AppContext);

    const section = app.sections.find(p => p.id === id);

    if (!section) {
        return <div>Section not found.</div>;
    }

    return (
        <div className='singleSectionMain'> 
            <div className='singleSectionText'>
                <h2>{section.name}</h2>
            </div>    
            <div className='singleSectionImage'>
                <img src={section.image} alt={section.name || "Section Image"} />
            </div>
        </div>
    );
}

export default ViewSection;
