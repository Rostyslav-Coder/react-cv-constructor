// IMAGEUPLOAD COMPONENT

import PropTypes from 'prop-types';
import '../styles/ImageUpload.css';
// 

const ImageUpload = ({ setImage, isOpen, onOpen }) => {
	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			setImage(reader.result);
		}

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className={`image component component__${isOpen ? 'open' : 'closed'}`} onClick={onOpen}>
			<h2>IMAGE UPLOAD</h2>
			{isOpen && (
				<input type="file" accept="public/image/*" onChange={handleImageUpload} />
			)}
		</div>
	);
};

ImageUpload.propTypes = {
	setImage: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onOpen: PropTypes.func.isRequired,
};

export default ImageUpload;
