// EDUCATION COMPONENT

import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Educations.css';

const Educations = ({ education, setEducation, isOpen, onOpen }) => {
	const [tempEducation, setTempEducation] = useState({
		institution: '',
		speciality: '',
		result: '',
		years: '',
	});

	const handleInputChange = (e, field) => {
		setTempEducation({
			...tempEducation,
			[field]: e.target.value,
		});
	};

	const handleAddEducation = () => {
		setEducation([...education, tempEducation]);
		setTempEducation({
			institution: '',
			speciality: '',
			result: '',
			years: '',
		});
	};

	const undoLastEducation = () => {
		if (education.length > 1) {
			const newEducation = education.slice(0, -1);
			setEducation(newEducation);
		}
	};

	return (
		<div className='education' onClick={onOpen}>
			<h2>EDUCATION</h2>
			{isOpen && (
				<>
					<div>
						<p>Add your institution:</p>
						<input value={tempEducation.institution} onChange={(e) => handleInputChange(e, 'institution')} />
					</div>
					<div>
						<p>Add your speciality:</p>
						<input value={tempEducation.speciality} onChange={(e) => handleInputChange(e, 'speciality')} />
					</div>
					<div>
						<p>Add your result:</p>
						<input value={tempEducation.result} onChange={(e) => handleInputChange(e, 'result')} />
					</div>
					<div>
						<p>Add your years:</p>
						<input value={tempEducation.years} onChange={(e) => handleInputChange(e, 'years')} />
					</div>
					<div>
						<button onClick={handleAddEducation}>Add new</button>
						<button onClick={undoLastEducation}>Undo last input</button>
					</div>
				</>
			)}
		</div>
	);
};

Educations.propTypes = {
	education: PropTypes.array.isRequired,
	setEducation: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onOpen: PropTypes.func.isRequired,
};

export default Educations;
