//  ResumeBuilder Module

import { useState } from 'react';
import stateData from '../stateData';
import Dashboard from './Dashboard';
import About from './About';
import ImageUpload from './ImageUpload';
import Summary from './Summary';
import Skills from './Skills';
import Education from './EducationList';
import Preview from './Preview';
import '../styles/ResumeBuilder.css';



const ResumeBuilder = () => {
	const [about, setAbout] = useState(stateData.aboutData);
	const [summary, setSummary] = useState(stateData.summaryData);
	const [skills, setSkills] = useState(stateData.skillsData);
	const [image, setImage] = useState(null);
	const [education, setEducation] = useState(stateData.educationData);

	return (
		<div className='resumeBuilder'>
			<Dashboard>
				<About about={about} setAbout={setAbout} />
				<Summary summary={summary} setSummary={setSummary} />
				<Skills skills={skills} setSkills={setSkills} />
				<ImageUpload setImage={setImage} />
				<Education education={education} setEducation={setEducation} />
			</Dashboard>
			<Preview
				about={about}
				summary={summary}
				skills={skills}
				image={image}
				education={education}
			/>
		</div>
	);
};

export default ResumeBuilder;
