// Preview Component

import PropTypes from 'prop-types';
import location from '../public/images/icons/location.png';
import viber from '../public/images/icons/viber.png';
import telegram from '../public/images/icons/telegram.png';
import whatsApp from '../public/images/icons/whatsapp.png';
import email from '../public/images/icons/email.png';
import gitHub from '../public/images/icons/github_.png';
import linkedIn from '../public/images/icons/linkedin.png';
import webPage from '../public/images/icons/webpage.png';
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
					<div className='skill__box'>
						{skills.map((skill, index) => {
							return (
								<div key={index} className='skill__item'>
									{skill.imgUrl && <img className='skill__img' src={skill.imgUrl} alt={skill.skill} />}
									<p className='skill__text'>{skill.skill}</p>
								</div>
							)
						})}
					</div>
				</div>
				<div className='element preview__education'>
					<h2>EDUCATION</h2>
					<hr />
					<div className='education__box'>
						{education.map((edu, index) => {
							return (
								<div key={index} className='education__item'>
									<p className='edu__institution'>{edu.institution}</p>
									<p className='edu__speciality'>{edu.speciality}</p>
									<p className='edu__result'>{edu.result}</p>
									<p className='edu__years'>{edu.years}</p>
								</div>
							)
						})}
					</div>
				</div>
				<div className='element preview__experience'>
					<h2>WORK EXPERIENCE</h2>
					<hr />
					{experience.map((exp, index) => {
						return (
							<div className='exp__item' key={index}>
								<p className='exp__position'>{exp.position}</p>
								<p className='exp__organization'>{exp.organization}</p>
								<p className='exp__responsibilities'>{exp.responsibilities}</p>
								<p className='exp__years'>{exp.years}</p>
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
					{image && <img className='image' src={image} alt='User upload' />}
				</div>
				<div className='element preview__contact'>
					<h2>CONTACT</h2>
					<hr />
					{
						contact.location &&
						<div>
							<img className='contact__icon' src={location} /> Location:
							<p className='contact__text'>{contact.location}</p>
						</div>
					}
					{
						contact.viber &&
						<div>
							<img className='contact__icon' src={viber} /> Viber:
							<p className='contact__text'>{contact.viber}</p>
						</div>
					}
					{
						contact.telegram &&
						<div>
							<img className='contact__icon' src={telegram} /> Telegram:
							<p className='contact__text'>{contact.telegram}</p>
						</div>
					}
					{
						contact.whatsApp &&
						<div>
							<img className='contact__icon' src={whatsApp} /> WhatsApp:
							<p className='contact__text'>{contact.whatsApp}</p>
						</div>
					}
					{
						contact.email &&
						<div>
							<img className='contact__icon' src={email} /> Email:
							<p className='contact__text'>{contact.email}</p>
						</div>
					}
					{
						contact.gitHub &&
						<div>
							<img className='contact__icon' src={gitHub} /> GitHub:
							<p className='contact__text'>{contact.gitHub}</p>
						</div>
					}
					{
						contact.linkedIn &&
						<div>
							<img className='contact__icon' src={linkedIn} /> LinkedIn:
							<p className='contact__text'>{contact.linkedIn}</p>
						</div>
					}
					{
						contact.webPage &&
						<div>
							<img className='contact__icon' src={webPage} /> Web Page:
							<p className='contact__text'>{contact.webPage}</p>
						</div>
					}
				</div>
				<div className='element preview__languages'>
					<h2>LANGUAGES</h2>
					<hr />
					{languages.map((lang, index) => {
						return (
							<div className='language__box' key={index}>
								<p className='language__name'>{lang.name}</p>
								<p className='language__level'>{lang.level}</p>
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
