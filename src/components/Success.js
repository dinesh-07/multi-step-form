import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export const Success = () => {
	return (
		<MuiThemeProvider>
			<React.Fragment>
				<AppBar title="Your data is successfully saved..." />
			</React.Fragment>
		</MuiThemeProvider>
	);
};
