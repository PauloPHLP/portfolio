import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import './Network.css';

const useStyles = makeStyles(() => ({
	customWidth: {
		marginTop: 1,
		fontSize: 14,
		backgroundColor: 'transparent',
	},
}));

function Network() {
	const classes = useStyles();

	return (
		<div>
			<li>
				<Tooltip
					title="LinkedIn"
					aria-label="LinkedIn"
					classes={{ tooltip: classes.customWidth }}
				>
					<a
						href="https://www.linkedin.com/in/paulo-lima-1218a9149/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa fa-linkedin"></i>
					</a>
				</Tooltip>
			</li>
			<li>
				<Tooltip
					title="GitHub"
					aria-label="GitHub"
					classes={{ tooltip: classes.customWidth }}
				>
					<a
						href="https://github.com/PauloPHLP"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa fa-github"></i>
					</a>
				</Tooltip>
			</li>
			<li>
				<Tooltip
					title="Stack Overflow"
					aria-label="Stack Overflow"
					classes={{ tooltip: classes.customWidth }}
				>
					<a
						href="https://stackoverflow.com/users/10607362/paulo-lima?tab=topactivity"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa fa-stack-overflow"></i>
					</a>
				</Tooltip>
			</li>
		</div>
	);
}

export default Network;
