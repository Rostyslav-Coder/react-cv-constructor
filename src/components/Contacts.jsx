// CONTACT COMPONENT

import PropTypes from 'prop-types';
import '../styles/Contacts.css';

const Contacts = ({ contact, setContact, isOpen, onOpen }) => {
	const handleContactLocatinChange = (e) => {
		setContact({
			...contact,
			location: e.target.value
		});
	};

	const handleContactViberChange = (e) => {
		setContact({
			...contact,
			viber: e.target.value
		});
	};

	const handleContactTelegramChange = (e) => {
		setContact({
			...contact,
			telegram: e.target.value
		});
	};

	const handleContactWhatsAppChange = (e) => {
		setContact({
			...contact,
			whatsApp: e.target.value
		});
	};

	const handleContactEmailChange = (e) => {
		setContact({
			...contact,
			email: e.target.value
		});
	};

	const handleContactGitHubChange = (e) => {
		setContact({
			...contact,
			gitHub: e.target.value
		});
	};

	const handleContactLinkedInChange = (e) => {
		setContact({
			...contact,
			linkedIn: e.target.value
		});
	};

	return (
		<div className='contact' onClick={onOpen}>
			<h2>CONTACTS</h2>
			{isOpen && (
				<>
					<div>
						<p>Add Your Location:</p>
						<input type="text" value={contact.location} onChange={handleContactLocatinChange} />
					</div>
					<div>
						<p>Add Your Viber Number:</p>
						<input type="tel" value={contact.viber} onChange={handleContactViberChange} />
					</div>
					<div>
						<p>Add Your Telegram URL:</p>
						<input type="url" value={contact.telegram} onChange={handleContactTelegramChange} />
					</div>
					<div>
						<p>Add Your WhatsApp URL:</p>
						<input type="url" value={contact.whatsApp} onChange={handleContactWhatsAppChange} />
					</div>
					<div>
						<p>Add Your Email Address:</p>
						<input type="email" value={contact.email} onChange={handleContactEmailChange} />
					</div>
					<div>
						<p>Add Your GitHub Address:</p>
						<input type="url" value={contact.gitHub} onChange={handleContactGitHubChange} />
					</div>
					<div>
						<p>Add Your LinkedIn Address:</p>
						<input type="url" value={contact.linkedIn} onChange={handleContactLinkedInChange} />
					</div>
				</>
			)}
		</div>
	);
};

Contacts.propTypes = {
	contact: PropTypes.object.isRequired,
	setContact: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onOpen: PropTypes.func.isRequired,
};

export default Contacts;