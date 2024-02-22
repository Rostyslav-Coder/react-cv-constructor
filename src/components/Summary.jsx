// Summary Module

import PropTypes from 'prop-types';
import '../styles/Summary.css'

const Summary = ({ summary, setSummary }) => {

	function handleSummaryTextChange(e) {
		setSummary({
			...summary,
			summaryText: e.target.value
		})
	}

	return (
		<div className='summary'>
			<textarea name="summary" id="summary" value={summary.summaryText} onChange={handleSummaryTextChange}></textarea>
		</div>
	)
}

Summary.propTypes = {
	summary: PropTypes.object.isRequired,
	setSummary: PropTypes.func.isRequired
}

export default Summary;
