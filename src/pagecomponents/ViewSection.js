import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../store/AppContext';

function ViewSection() {
    const { id } = useParams();
    const { app } = useContext(AppContext);

    const section = app.sections.find(p => p.id === id);

    if (!section) {
        // Handle the case where the section isn't found
        // e.g., show an error message or redirect
        return <div>Section not found.</div>;
    }

    return (
        <div>     
            <h2>{section.name}</h2>
            <img src={section.image} alt={section.name || "Section Image"} />
        </div>
    );
}

export default ViewSection;
