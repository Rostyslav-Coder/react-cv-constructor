// Languages Component

import PropTypes from 'prop-types';
import { useState } from 'react';

const Languages = ({ languages, setLanguages }) => {
	const [tempLanguages, setTempLanguages] = useState({
		name: '',
		level: '',
	});

	const handleLanguagesNameChange = (e, field) => {
		setTempLanguages({
			...tempLanguages,
			[field]: e.target.value,
		});
	};

	const handleLanguagesLevelChange = (e, field) => {
		setTempLanguages({
			...tempLanguages,
			[field]: e.target.value,
		});
	};

	const handleAddLanguages = () => {
		setLanguages([...languages, tempLanguages]);
		setTempLanguages({
			name: '',
			level: '',
		});
	};

	const undoLastLanguage = () => {
		if (languages.length > 1) {
			const newLanguage = languages.slice(0, -1);
			setLanguages(newLanguage);
		}
	};

	return (
		<div className='languages'>
			<p>Add Your Language:</p>
			<input type="text" value={tempLanguages.name} onChange={(e) => handleLanguagesNameChange(e, 'name')} />
			<p>Add Your Level:</p>
			<input type="text" value={tempLanguages.level} onChange={(e) => handleLanguagesLevelChange(e, 'level')} />
			<button onClick={handleAddLanguages}>Add New</button>
			<button onClick={undoLastLanguage}>Undo Last Input</button>
		</div>
	);
};

Languages.propTypes = {
	languages: PropTypes.array.isRequired,
	setLanguages: PropTypes.func.isRequired,
};

export default Languages;
