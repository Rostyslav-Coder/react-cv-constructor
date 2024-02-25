// SUMMARY COMPONENT

import PropTypes from 'prop-types';

const Summary = ({ summary, setSummary, isOpen, onOpen }) => {
	const handleSummaryTextChange = (e) => {
		setSummary({
			...summary,
			summaryText: e.target.value,
		});
	};

	return (
		<div className={`summary component component__${isOpen ? 'open' : 'closed'}`} onClick={onOpen}>
			<h2>SUMMARY</h2>
			{isOpen && (
				<>
					<p>Add Your Summary:</p>
					<textarea
						name="summary"
						id="summary"
						value={summary.summaryText}
						onChange={handleSummaryTextChange}>
					</textarea>
				</>
			)}
		</div>
	);
};

Summary.propTypes = {
	summary: PropTypes.object.isRequired,
	setSummary: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onOpen: PropTypes.func.isRequired,
};

export default Summary;
