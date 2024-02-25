// EXPERIENCE COMPONENT

import { useState } from 'react';
import PropTypes from 'prop-types';

const Experience = ({ experience, setExperience, isOpen, onOpen }) => {
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
		<div className={`experience component component__${isOpen ? 'open' : 'closed'}`} onClick={onOpen}>
			<h2>EXPERIENCE</h2>
			{isOpen && (
				<>
					<div>
						<p>Add your position:</p>
						<input value={tempExperience.position} onChange={(e) => handleInputChange(e, 'position')} />
					</div>
					<div>
						<p>Add your organization:</p>
						<input value={tempExperience.organization} onChange={(e) => handleInputChange(e, 'organization')} />
					</div>
					<div>
						<p>Add your responsibilities:</p>
						<input value={tempExperience.responsibilities} onChange={(e) => handleInputChange(e, 'responsibilities')} />
					</div>
					<div>
						<p>Add your years:</p>
						<input value={tempExperience.years} onChange={(e) => handleInputChange(e, 'years')} />
					</div>
					<div className='button__box'>
						<button onClick={handleAddExperience}>Add new</button>
						<button onClick={undoLastExperience}>Undo last input</button>
					</div>
				</>
			)}
		</div>
	);
};

Experience.propTypes = {
	experience: PropTypes.array.isRequired,
	setExperience: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onOpen: PropTypes.func.isRequired,
};

export default Experience;
