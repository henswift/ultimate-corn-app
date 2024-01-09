import React, { useContext, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { AppContext } from '../store/AppContext';
import './ViewSection.css';
import axios from 'axios';

function ViewSection() {
    const { id } = useParams();
    const { app, setApp } = useContext(AppContext);
    const section = app.sections.find(p => p.id === id);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleDeleteSection = async (sectionID) => {
        try {
            const hasPlantings = app.plantings.some(planting => planting.sectionId === sectionID);

            if (hasPlantings) {
                throw new Error("Cannot delete section with plantings. Delete the plantings first.");
            }

            await axios.delete(`https://657a4ab21acd268f9afae0fa.mockapi.io/sections/${sectionID}`);

            setApp({ type: 'deleteSection', payload: sectionID });
            navigate('/planting');
        } catch (error) {
            console.error('Error deleting section', error.message);
            setError(error.message);
        }
    };

    return (
        <div className='singleSectionMain'>
            {error && <div className="error">{error}</div>}
            <div className='singleSectionText'>
                <h2>{section.name}</h2>
            </div>
            <div className='singleSectionImage'>
                <img src={section.image} alt={section.name || "Section Image"} />
            </div>
            <div>
                <button onClick={() => handleDeleteSection(section.id)}>Delete</button>
            </div>
            <div className='plantingsList'>
                <h3>Plantings in this section:</h3>
                {app.plantings.filter(planting => planting.sectionId === section.id).map(planting => (
                    <Link to={`/planting/${planting.id}`} key={planting.id}>
                        <div key={planting.id} className='sectionDefaultBox'>
                            <h4>{planting.name}</h4>
                            <img src={planting.image} alt={planting.name || "Planting Image"} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ViewSection;
