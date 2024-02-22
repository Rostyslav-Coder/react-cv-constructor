// Contact Component

import PropTypes from 'prop-types';

const Contact = ({ contact, setContact }) => {

	function handleContactLocatinChange(e) {
		setContact({
			...contact,
			location: e.target.value
		});
	}

	function handleContactViberChange(e) {
		setContact({
			...contact,
			viber: e.target.value
		});
	}

	function handleContactTelegramChange(e) {
		setContact({
			...contact,
			telegram: e.target.value
		});
	}

	function handleContactWhatsAppChange(e) {
		setContact({
			...contact,
			whatsApp: e.target.value
		});
	}

	function handleContactEmailChange(e) {
		setContact({
			...contact,
			email: e.target.value
		});
	}

	function handleContactGitHubChange(e) {
		setContact({
			...contact,
			gitHub: e.target.value
		});
	}

	function handleContactLinkedInChange(e) {
		setContact({
			...contact,
			linkedIn: e.target.value
		});
	}

	return (
		<div>
			<div>
				Add Your Location:
				<input type="text" value={contact.location} onChange={handleContactLocatinChange} />
			</div>
			<div>
				Add Your Viber Number:
				<input type="tel" value={contact.viber} onChange={handleContactViberChange} />
			</div>
			<div>
				Add Your Telegram URL:
				<input type="url" value={contact.telegram} onChange={handleContactTelegramChange} />
			</div>
			<div>
				Add Your WhatsApp URL:
				<input type="url" value={contact.whatsApp} onChange={handleContactWhatsAppChange} />
			</div>
			<div>
				Add Your Email Address:
				<input type="email" value={contact.email} onChange={handleContactEmailChange} />
			</div>
			<div>
				Add Your GitHub Address:
				<input type="url" value={contact.gitHub} onChange={handleContactGitHubChange} />
			</div>
			<div>
				Add Your LinkedIn Address:
				<input type="url" value={contact.linkedIn} onChange={handleContactLinkedInChange} />
			</div>
		</div>
	)
};

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
	setContact: PropTypes.func.isRequired,
}

export default Contact;
