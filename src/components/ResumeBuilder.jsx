//  ResumeBuilder Module

import { useState } from 'react';
import stateData from '../stateData';
import About from './About';
import Summary from './Summary';
import Skills from './Skills';
import Education from './EducationList';
import Experience from './Experience';
import Hobby from './Hobby';
import ImageUpload from './ImageUpload';
import Contact from './Contact';
import Languages from './Languages';
import Preview from './Preview';
import '../styles/ResumeBuilder.css';



const ResumeBuilder = () => {
	const [about, setAbout] = useState(stateData.aboutData);
	const [summary, setSummary] = useState(stateData.summaryData);
	const [skills, setSkills] = useState(stateData.skillsData);
	const [education, setEducation] = useState(stateData.educationData);
	const [experience, setExperience] = useState(stateData.experienceData);
	const [hobby, setHobby] = useState(stateData.hobbyData);
	const [image, setImage] = useState(null);
	const [contact, setContact] = useState(stateData.contactData);
	const [languages, setLanguages] = useState(stateData.languageData);

	return (
		<div className='resumeBuilder'>
			<div className='dashboard'>
				<About about={about} setAbout={setAbout} />
				<Summary summary={summary} setSummary={setSummary} />
				<Skills skills={skills} setSkills={setSkills} />
				<Education education={education} setEducation={setEducation} />
				<Experience experience={experience} setExperience={setExperience} />
				<Hobby hobby={hobby} setHobby={setHobby} />
				<ImageUpload setImage={setImage} />
				<Contact contact={contact} setContact={setContact} />
				<Languages languages={languages} setLanguages={setLanguages} />
			</div>
			<Preview
				about={about}
				summary={summary}
				skills={skills}
				education={education}
				experience={experience}
				hobby={hobby}
				image={image}
				contact={contact}
				languages={languages}
			/>
		</div>
	);
};

export default ResumeBuilder;
