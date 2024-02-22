// Dashboard Module

import PropTypes from 'prop-types';
import '../styles/Dashboard.css';

const Dashboard = ({ children }) => {
	return (
		<div className="dashboard">
			{children}
		</div>
	)
}

Dashboard.propTypes = {
	children: PropTypes.node,
}

export default Dashboard;
