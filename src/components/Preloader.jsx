// PRELOADER COMPONENT

import PropTypes from 'prop-types';
import preloderData from '../content';
import '../styles/Preloader.css';

const PreloaderCard = ({ title, text }) => {
	return (
		<div className='preloader__card'>
			<h3 className='card__title'>{title}</h3>
			<p className='card__text'>{text}</p>
		</div>
	);
};

PreloaderCard.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

const PreloaderCardsGrp = () => {
	return (
		<div className='preloader__cards'>
			{preloderData.map(data => {
				return (
					<PreloaderCard key={data.id} {...data} />
				);
			})}
		</div>
	);
};

const Preloader = ({ onClick }) => {
	return (
		<div className='preloader__wrapper'>
			<h2 className='preloader__title' >
				Welcome to Resume Builder!
			</h2 >
			<h1 className='preloader__title-main'>
				Create a professional resume in just a few steps.
			</h1>
			<p className='preloader__text'>
				Our intuitive online service will help you create an impressive resume that highlights your skills, experience, and achievements.
			</p>
			<h2 className='preloader__title'>
				Why choose us?
			</h2>
			<PreloaderCardsGrp />
			<button className='preloader__button' onClick={onClick}>
				Let`s go!
			</button>
		</div >
	);
};

Preloader.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default Preloader;
