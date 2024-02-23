// LANGUAGES COMPONENT

import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Languages.css';

const Languages = ({ languages, setLanguages, isOpen, onOpen }) => {
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
		<div className={`languages component component__${isOpen ? 'open' : 'closed'}`} onClick={onOpen}>
			<h2>LANGUAGES</h2>
			{isOpen && (
				<>
					<div>
						<p>Add Your Language:</p>
						<input type="text" value={tempLanguages.name} onChange={(e) => handleLanguagesNameChange(e, 'name')} />
					</div>
					<div>
						<p>Add Your Level:</p>
						<input type="text" value={tempLanguages.level} onChange={(e) => handleLanguagesLevelChange(e, 'level')} />
					</div>
					<div className='button__box'>
						<button onClick={handleAddLanguages}>Add New</button>
						<button onClick={undoLastLanguage}>Undo Last Input</button>
					</div>
				</>
			)}
		</div>
	);
};

Languages.propTypes = {
	languages: PropTypes.array.isRequired,
	setLanguages: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onOpen: PropTypes.func.isRequired,
};

export default Languages;
