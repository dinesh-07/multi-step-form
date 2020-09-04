import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export const Confirm = ({ nextStep, state, previousStep }) => {
	const continueFun = (e) => {
		e.preventDefault();
		// Backend save
		nextStep();
	};

	const backFun = (e) => {
		e.preventDefault();
		previousStep();
	};

	return (
		<MuiThemeProvider>
			<React.Fragment>
				<AppBar title="Confirm User Data" />
				<List>
					<ListItem primaryText="First Name" secondaryText={state.firstName} />
					<ListItem primaryText="Last Name" secondaryText={state.lastName} />
					<ListItem primaryText="Email" secondaryText={state.email} />
					<ListItem primaryText="Occupation" secondaryText={state.occupation} />
					<ListItem primaryText="City" secondaryText={state.city} />
					<ListItem primaryText="Bio" secondaryText={state.bio} />
				</List>
				<br />
				<RaisedButton label="Confirm" primary={true} onClick={continueFun} style={styles.button} />
				<RaisedButton label="Back" primary={false} onClick={backFun} style={styles.button} />
			</React.Fragment>
		</MuiThemeProvider>
	);
};

const styles = {
	button: {
		margin: 15,
	},
};
