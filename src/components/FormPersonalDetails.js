import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export const FormPersonalDetails = ({ nextStep, handleChange, state, previousStep }) => {
	const continueFun = (e) => {
		e.preventDefault();
		nextStep();
	};
	const backFun = (e) => {
		e.preventDefault();
		previousStep();
	};
	return (
		<MuiThemeProvider>
			<React.Fragment>
				<AppBar title="Enter Personal Details" />
				<TextField
					hintText="Enter your occupation"
					floatingLabelText="Occupation"
					onChange={(e) => handleChange('occupation', e)}
					defaultValue={state.occupation}
				/>
				<br />
				<TextField
					hintText="Enter your city"
					floatingLabelText="City"
					onChange={(e) => handleChange('city', e)}
					defaultValue={state.city}
				/>
				<br />
				<TextField
					hintText="Enter your bio"
					floatingLabelText="Bio"
					onChange={(e) => handleChange('bio', e)}
					defaultValue={state.bio}
				/>
				<br />
				<RaisedButton label="Continue" primary={true} onClick={continueFun} style={styles.button} />
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
