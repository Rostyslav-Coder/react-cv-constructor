// Preview Component

import PropTypes from 'prop-types';
import '../styles/Preview.css';

const Preview = ({ about, summary, skills, image, education, experience, hobby, contact, languages }) => {
	return (
		<div className="preview">
			<div className="main__side">
				<div className='element preview__about'>
					<h1>{about.firstName} {about.lastName}</h1>
					<h2>{about.level} {about.profession}</h2>
				</div>
				<div className='element preview__summary'>
					<h2>SUMMARY</h2>
					<hr />
					<p>{summary.summaryText}</p>
				</div>
				<div className='element preview__skills'>
					<h2>SKILLS</h2>
					<hr />
					{skills.map((skill, index) => {
						return (
							<div key={index} className='skill__box'>
								{skill.imgUrl && <img className='skill__img' src={skill.imgUrl} alt={skill.skill} />}
								<p className='skill__text'>{skill.skill}</p>
							</div>
						)
					})}
				</div>
				<div className='element preview__education'>
					<h2>EDUCATION</h2>
					<hr />
					{education.map((edu, index) => {
						return (
							<div key={index}>
								<p>{edu.institution}</p>
								<p>{edu.speciality}</p>
								<p>{edu.result}</p>
								<p>{edu.years}</p>
							</div>
						)
					})}
				</div>
				<div className='element preview__experience'>
					<h2>EXPERIENCE</h2>
					<hr />
					{experience.map((exp, index) => {
						return (
							<div key={index}>
								<p>{exp.position && exp.organization ? `${exp.position} at the ${exp.organization}` : exp.position || exp.organization}</p>
								<p>{exp.responsibilities}</p>
								<p>{exp.years}</p>
							</div>
						)
					})}
				</div>
				<div className='element preview__hobby'>
					<h2>HOBBY</h2>
					<hr />
					<p>{hobby.hobbyText}</p>
				</div>
			</div>

			<div className="aside">
				<div className='element preview__image'>
					{image && <img src={image} alt='User upload' />}
				</div>
				<div className='element preview__contact'>
					<h2>CONTACT</h2>
					<hr />
					<p>{contact.location}</p>
					<p>{contact.viber}</p>
					<p>{contact.telegram}</p>
					<p>{contact.whatsApp}</p>
					<p>{contact.email}</p>
					<p>{contact.gitHub}</p>
					<p>{contact.linkedIn}</p>
				</div>
				<div className='element preview__languages'>
					<h2>LANGUAGES</h2>
					<hr />
					{languages.map((lang, index) => {
						return (
							<div key={index}>
								<p>{lang.name}</p>
								<p>{lang.level}</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

Preview.propTypes = {
	about: PropTypes.object,
	summary: PropTypes.object,
	skills: PropTypes.array,
	education: PropTypes.array,
	experience: PropTypes.array,
	hobby: PropTypes.object,
	image: PropTypes.string,
	contact: PropTypes.object,
	languages: PropTypes.array,
}

export default Preview;
