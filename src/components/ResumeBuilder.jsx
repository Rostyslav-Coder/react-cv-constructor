//  ResumeBuilder Component

import { useState } from 'react';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
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

const formatFileName = (str) => {
	return str.replace(/\s+/g, '_');
}

const pdfRenderer = (about) => {
	const input = document.querySelector(".preview");
	html2canvas(input).then(canvas => {
		const imgData = canvas.toDataURL('image/png');
		const pdf = new jsPDF('p', 'mm', 'a4'); // set PDF to A4 size
		const imgProps = pdf.getImageProperties(imgData);
		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
		pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
		const fileName = formatFileName(`${about.firstName} ${about.lastName} ${about.level} ${about.profession} CV.pdf`);
		pdf.save(fileName);
	});
}

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
	const [openComponent, setOpenComponent] = useState('About');
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
				<button className='pdf__renderer' onClick={() => pdfRenderer(about)}>Save To PDF</button>
				<a className='copy__link' href="https://www.linkedin.com/in/rostyslav-putnikov-76484926a/" target="_blank" rel="noopener noreferrer">2024 &copy; Rostyslav-Coder</a>
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
