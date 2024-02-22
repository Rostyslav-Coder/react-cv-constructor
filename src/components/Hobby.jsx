// Hobby Component

import PropTypes from 'prop-types';

const Hobby = ({ hobby, setHobby }) => {

	function handleHobbyChange(e) {
		setHobby({
			...hobby,
			hobbyText: e.target.value
		});
	}

	return (
		<div className='hobby'>
			Add Your Hobby:
			<input
				type="text"
				value={hobby.hobbyText}
				onChange={handleHobbyChange}
			/>
		</div>
	)
};

Hobby.propTypes = {
	hobby: PropTypes.object.isRequired,
	setHobby: PropTypes.func.isRequired
};

export default Hobby;
