// Education Component

import PropTypes from 'prop-types';
import { useState } from 'react';

const Education = ({ education, setEducation }) => {
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
		<div className='education__item'>
			<p>Add your institution:</p>
			<input value={tempEducation.institution} onChange={(e) => handleInputChange(e, 'institution')} />
			<p>Add your speciality:</p>
			<input value={tempEducation.speciality} onChange={(e) => handleInputChange(e, 'speciality')} />
			<p>Add your result:</p>
			<input value={tempEducation.result} onChange={(e) => handleInputChange(e, 'result')} />
			<p>Add your years:</p>
			<input value={tempEducation.years} onChange={(e) => handleInputChange(e, 'years')} />
			<button onClick={handleAddEducation}>Add new</button>
			<button onClick={undoLastEducation}>Undo last input</button>
		</div>
	);
};

Education.propTypes = {
	education: PropTypes.array.isRequired,
	setEducation: PropTypes.func.isRequired,
};

export default Education;

// const EducationList = ({ education, setEducation }) => {
// 	const addEducation = () => {
// 		setEducation([...education, {
// 			institution: '',
// 			speciality: '',
// 			result: '',
// 			years: '',
// 		}]);
// 	};

// 	const undoLastEducation = () => {
// 		if (education.length > 1) {
// 			const newEducation = education.scice(0, education.length - 1);
// 			setEducation(newEducation);
// 		}
// 	};

// 	return (
// 		<div className='education'>
// 			{education.map((edu, index) => (
// 				<Education key={index} education={edu} setEducation={(updatedEdu) => {
// 					const newEducation = [...education];
// 					newEducation[index] = updatedEdu;
// 					setEducation(newEducation);
// 				}} />
// 			))}
// 			<button onClick={addEducation}>Add new</button>
// 			<button onClick={undoLastEducation}>Undo last input</button>
// 		</div>
// 	)
// };

// EducationList.propTypes = {
// 	education: PropTypes.array.isRequired,
// 	setEducation: PropTypes.func.isRequired,
// };

// export default EducationList;
