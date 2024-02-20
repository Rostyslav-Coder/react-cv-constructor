// PreloaderCard & PreloaderCards Module

import PropTypes from 'prop-types';
import preloderData from '../content';
import '../styles/PreloaderCards.css'

const PreloaderCard = ({ title, text }) => {
	return (
		<div className='preloader__card'>
			<h3 className='card__title'>{title}</h3>
			<p className='card__text'>{text}</p>
		</div>
	)
}

const PreloaderCards = () => {
	return (
		<div className='preloader__card-grp'>
			{preloderData.map(data => {
				return (
					<PreloaderCard key={data.id} {...data} />
				)
			})}
		</div>
	)
}

PreloaderCard.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

export default PreloaderCards;
