// ImageUpload Component

import PropTypes from 'prop-types';

const ImageUpload = ({ setImage }) => {
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
		<div className="image">
			<input type="file" accept="public/image/*" onChange={handleImageUpload} />
		</div>
	);
};

ImageUpload.propTypes = {
	setImage: PropTypes.func.isRequired,
}

export default ImageUpload;
