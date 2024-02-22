// About Module

import PropTypes from 'prop-types';
import '../styles/About.css';

const About = ({ about, setAbout }) => {

	function handleAboutFirstnameChange(e) {
		setAbout({
			...about,
			firstName: e.target.value
		})
	}

	function handleAboutLastnameChange(e) {
		setAbout({
			...about,
			lastName: e.target.value
		})
	}

	function handleAboutProfessionChange(e) {
		setAbout({
			...about,
			profession: e.target.value
		})
	}

	function handleAboutLevelChange(e) {
		setAbout({
			...about,
			level: e.target.value
		})
	}

	return (
		<div className='about'>

			<div>
				Enter Your Firstname:
				<input
					type="text"
					value={about.firstName}
					onChange={handleAboutFirstnameChange}
				/>
			</div>

			<div>
				Enter Your Lastname:
				<input
					type="text"
					value={about.lastName}
					onChange={handleAboutLastnameChange}
				/>
			</div>

			<div>
				Select Your Profession:
				<input
					type="text"
					value={about.profession}
					onChange={handleAboutProfessionChange}
				/>
			</div>

			<div>
				Choose Your Professional Level:
				<select value={about.level} onChange={handleAboutLevelChange}>
					<option value=""></option>
					<option value="Junior">Junior</option>
					<option value="Middle">Middle</option>
					<option value="Senior">Senior</option>
				</select>
			</div>

		</div>
	)
}

About.propTypes = {
	about: PropTypes.object.isRequired,
	setAbout: PropTypes.func.isRequired
}

export default About;
