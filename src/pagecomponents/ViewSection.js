import React, { useContext, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../store/AppContext';
import './ViewSection.css';

function ViewSection() {
	const { id } = useParams();
	const { app, setApp } = useContext(AppContext);
	const section = app.sections.find(p => p.id === id);
	const navigate = useNavigate();
	const [error, setError] = useState(null);

	const handleAddPlanting = () => {
		navigate('/add-planting')
	};

	const handleBackButtonClick = () => {
		navigate(-1);
	};

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

	if (!section) {
		// Handles the case where the section is not found. Not sure what all this does??
		return <div>Section not found</div>;
	};

	return (
		<div className='singleSectionMain'>
			<div className='sectionSpecifics'>
				{error && <div className="error">{error}</div>}
				<div className='singleSectionText'>
					<h2>{section.name}</h2>
				</div>
				<div className='singleSectionImage'>
					<img src={section.image} alt={section.name || "Section Image"} />
				</div>
				<div className='sectionFooter'>
					<button onClick={() => handleDeleteSection(section.id)}>Delete</button>
					<button>Edit</button>
					<button type='button' onClick={handleBackButtonClick}>Back</button>
				</div>
				<div className='plantingsList'>
					<div className='plantingListHeader'>
							<h3>Plantings in this section:</h3>
							<button onClick={handleAddPlanting}>+ Planting</button>
					</div>
					<div className='plantingListContent'>
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
			</div>
		</div>
	);
};

export default ViewSection;
