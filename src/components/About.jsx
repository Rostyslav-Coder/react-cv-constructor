// ABOUT COMPONENT

import PropTypes from 'prop-types';

const About = ({ about, setAbout, isOpen, onOpen }) => {
	const handleAboutFirstnameChange = (e) => {
		setAbout({
			...about,
			firstName: e.target.value,
		});
	};

	const handleAboutLastnameChange = (e) => {
		setAbout({
			...about,
			lastName: e.target.value,
		});
	};

	const handleAboutProfessionChange = (e) => {
		setAbout({
			...about,
			profession: e.target.value,
		});
	};

	const handleAboutLevelChange = (e) => {
		setAbout({
			...about,
			level: e.target.value,
		});
	};

	return (
		<div className={`about component component__${isOpen ? 'open' : 'closed'}`} onClick={onOpen}>
			<h2>ABOUT</h2>
			{isOpen && (
				<>
					<div>
						<p>Add Your Firstname:</p>
						<input
							type="text"
							value={about.firstName}
							onChange={handleAboutFirstnameChange}
						/>
					</div>

					<div>
						<p>Add Your Lastname:</p>
						<input
							type="text"
							value={about.lastName}
							onChange={handleAboutLastnameChange}
						/>
					</div>

					<div>
						<p>Add Your Profession:</p>
						<input
							type="text"
							value={about.profession}
							onChange={handleAboutProfessionChange}
						/>
					</div>

					<div>
						<p>Choose Your Professional Level:</p>
						<select value={about.level} onChange={handleAboutLevelChange}>
							<option value=""></option>
							<option value="Junior">Junior</option>
							<option value="Middle">Middle</option>
							<option value="Senior">Senior</option>
						</select>
					</div>
				</>
			)}
		</div>
	);
};

About.propTypes = {
	about: PropTypes.object.isRequired,
	setAbout: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onOpen: PropTypes.func.isRequired,
};

export default About;
