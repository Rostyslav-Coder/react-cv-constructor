//  ResumeBuilder Component

import { useState } from 'react';
import stateData from '../stateData';
import About from './About';
import Summary from './Summary';
import Skills from './Skills';
import Educations from './Educations';
import Experience from './Experience';
import Hobby from './Hobby';
import ImageUpload from './ImageUpload';
import Contacts from './Contacts';
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
	const [openComponent, setOpenComponent] = useState(null);

	const handleOpen = (ComponentName) => {
		setOpenComponent(ComponentName);
	};

	return (
		<div className='resumeBuilder'>
			<div className='dashboard'>
				<About
					about={about}
					setAbout={setAbout}
					isOpen={openComponent === 'About'}
					onOpen={() => handleOpen('About')}
				/>
				<Summary
					summary={summary}
					setSummary={setSummary}
					isOpen={openComponent === 'Summary'}
					onOpen={() => handleOpen('Summary')}
				/>
				<Skills
					skills={skills}
					setSkills={setSkills}
					isOpen={openComponent === 'Skills'}
					onOpen={() => handleOpen('Skills')}
				/>
				<Educations
					education={education}
					setEducation={setEducation}
					isOpen={openComponent === 'Education'}
					onOpen={() => handleOpen('Education')}
				/>
				<Experience
					experience={experience}
					setExperience={setExperience}
					isOpen={openComponent === 'Experience'}
					onOpen={() => handleOpen('Experience')}
				/>
				<Hobby
					hobby={hobby}
					setHobby={setHobby}
					isOpen={openComponent === 'Hobby'}
					onOpen={() => handleOpen('Hobby')}
				/>
				<ImageUpload
					setImage={setImage}
					isOpen={openComponent === 'ImageUpload'}
					onOpen={() => handleOpen('ImageUpload')}
				/>
				<Contacts
					contact={contact}
					setContact={setContact}
					isOpen={openComponent === 'Contact'}
					onOpen={() => handleOpen('Contact')}
				/>
				<Languages
					languages={languages}
					setLanguages={setLanguages}
					isOpen={openComponent === 'Languages'}
					onOpen={() => handleOpen('Languages')}
				/>
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
