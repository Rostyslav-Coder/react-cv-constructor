// HOBBY COMPONENT

import PropTypes from 'prop-types';

const Hobby = ({ hobby, setHobby, isOpen, onOpen }) => {
	const handleHobbyChange = (e) => {
		setHobby({
			...hobby,
			hobbyText: e.target.value
		});
	};

	return (
		<div className={`hobby component component__${isOpen ? 'open' : 'closed'}`} onClick={onOpen}>
			<h2>HOBBY</h2>
			{isOpen && (
				<>
					<p>Add Your Hobby:</p>
					<input
						type="text"
						value={hobby.hobbyText}
						onChange={handleHobbyChange}
					/>
				</>
			)}
		</div>
	);
};

Hobby.propTypes = {
	hobby: PropTypes.object.isRequired,
	setHobby: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onOpen: PropTypes.func.isRequired,
};

export default Hobby;
