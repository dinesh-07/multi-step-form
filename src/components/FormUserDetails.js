import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export const FormUserDetails = ({ nextStep, handleChange, state }) => {
	const continueFun = (e) => {
		e.preventDefault();
		nextStep();
	};

	return (
		<MuiThemeProvider>
			<React.Fragment>
				<AppBar title="Enter User Details" />
				<TextField
					hintText="Enter your first name"
					floatingLabelText="First Name"
					onChange={(e) => handleChange('firstName', e)}
					defaultValue={state.firstName}
				/>
				<br />
				<TextField
					hintText="Enter your last name"
					floatingLabelText="Last Name"
					onChange={(e) => handleChange('lastName', e)}
					defaultValue={state.lastName}
				/>
				<br />
				<TextField
					hintText="Enter your email"
					floatingLabelText="Email"
					onChange={(e) => handleChange('email', e)}
					defaultValue={state.email}
				/>
				<br />
				<RaisedButton label="Continue" primary={true} onClick={continueFun} style={styles.button} />
			</React.Fragment>
		</MuiThemeProvider>
	);
};

const styles = {
	button: {
		margin: 15,
	},
};
