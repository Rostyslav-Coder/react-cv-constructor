// SKILLS COMPONENT

import { useState } from 'react';
import PropTypes from 'prop-types';
import skillsImages from '../skillImages.js';
import '../styles/Skills.css';

const Skills = ({ skills, setSkills, isOpen, onOpen }) => {
	const [tempSkills, setTempSkills] = useState({
		imgUrl: '',
		skill: '',
	});

	const handleInputChange = (e, field) => {
		setTempSkills({
			...tempSkills,
			[field]: e.target.value,
		});
	};

	const handleAddSkill = () => {
		let imgUrl = '';
		const skillLowerCase = tempSkills.skill.toLowerCase();
		if (skillsImages[skillLowerCase]) {
			imgUrl = skillsImages[skillLowerCase]
		}
		setSkills([...skills, { skill: tempSkills.skill, imgUrl }]);
		setTempSkills({
			imgUrl: '',
			skill: '',
		});
	};

	const undoLastSkill = () => {
		if (skills.length > 1) {
			const newSkill = skills.slice(0, -1);
			setSkills(newSkill);
		}
	};

	return (
		<div className='skill__item' onClick={onOpen}>
			<h2>SKILLS</h2>
			{isOpen && (
				<>
					<p>Add your skill:</p>
					<input value={tempSkills.skill} onChange={(e) => handleInputChange(e, 'skill')} />
					<button onClick={handleAddSkill}>Add new</button>
					<button onClick={undoLastSkill}>Undo last input</button>
				</>
			)}
		</div>
	);
};

Skills.propTypes = {
	skills: PropTypes.array.isRequired,
	setSkills: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onOpen: PropTypes.func.isRequired,
};

export default Skills;
