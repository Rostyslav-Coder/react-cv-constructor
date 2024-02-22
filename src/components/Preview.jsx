// Preview Component

import PropTypes from 'prop-types';

const Preview = ({ about, summary, skills, image, education }) => {
	return (
		<div className="preview">
			<div>
				<h1>{about.firstName} {about.lastName}</h1>
				<h2>{about.level} {about.profession}</h2>
			</div>
			<div>
				<h2>SUMMARY</h2>
				<hr />
				<p>{summary.summaryText}</p>
			</div>
			<div>
				<h2>SKILLS</h2>
				<hr />
				{skills.map((skill, index) => {
					return (
						<div key={index}>
							{skill.imgUrl && <img src={skill.imgUrl} alt={skill.skill} />}
							<p>{skill.skill}</p>
						</div>
					)
				})}
			</div>

			<div>
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
			<div>
				{image && <img src={image} alt='User upload' />}
			</div>
		</div>
	)
}

Preview.propTypes = {
	about: PropTypes.object,
	summary: PropTypes.object,
	skills: PropTypes.array,
	education: PropTypes.array,
	image: PropTypes.string,
}

export default Preview;
