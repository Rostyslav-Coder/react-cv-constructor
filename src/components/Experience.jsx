// Experience Component

import PropTypes from 'prop-types';
import { useState } from 'react';

const Experience = ({ experience, setExperience }) => {
	const [tempExperience, setTempExperience] = useState({
		position: '',
		organization: '',
		responsibilities: '',
		years: '',
	});

	const handleInputChange = (e, field) => {
		setTempExperience({
			...tempExperience,
			[field]: e.target.value,
		});
	};

	const handleAddExperience = () => {
		setExperience([...experience, tempExperience]);
		setTempExperience({
			position: '',
			organization: '',
			responsibilities: '',
			years: '',
		});
	};

	const undoLastExperience = () => {
		if (experience.length > 1) {
			const newExperience = experience.slice(0, -1);
			setExperience(newExperience);
		}
	};

	return (
		<div className='experience'>
			<p>Add your position:</p>
			<input value={tempExperience.position} onChange={(e) => handleInputChange(e, 'position')} />
			<p>Add your organization:</p>
			<input value={tempExperience.organization} onChange={(e) => handleInputChange(e, 'organization')} />
			<p>Add your responsibilities:</p>
			<input value={tempExperience.responsibilities} onChange={(e) => handleInputChange(e, 'responsibilities')} />
			<p>Add your years:</p>
			<input value={tempExperience.years} onChange={(e) => handleInputChange(e, 'years')} />
			<button onClick={handleAddExperience}>Add new</button>
			<button onClick={undoLastExperience}>Undo last input</button>
		</div>
	);
};

Experience.propTypes = {
	experience: PropTypes.array.isRequired,
	setExperience: PropTypes.func.isRequired,
};

export default Experience;
