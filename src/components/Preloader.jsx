// Preloader Module

import PropTypes from 'prop-types';
import PreloaderCards from './PreloaderCards';
import '../styles/Preloader.css';

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
			<PreloaderCards />
			<h2 className='preloader__title'>
				Start your journey to success right now!
			</h2>
			<p>
				Create your resume today and discover new opportunities. Your future starts here!
			</p>
			<button className='preloader__button' onClick={onClick}>
				Let`s go!
			</button>
		</div >
	)
}

Preloader.propTypes = {
	onClick: PropTypes.func.isRequired
}

export default Preloader;
