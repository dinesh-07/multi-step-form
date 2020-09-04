import React, { useState } from 'react';
import { FormUserDetails } from './FormUserDetails';
import { FormPersonalDetails } from './FormPersonalDetails';
import { Confirm } from './Confirm';
import { Success } from './Success';

export const UserForm = () => {
	const [state, setState] = useState({
		step: 1,
		firstName: '',
		lastName: '',
		email: '',
		occupation: '',
		city: '',
		bio: '',
	});

	// Proceed to next step
	const nextStep = () => {
		setState({
			...state,
			step: state.step + 1,
		});
	};

	// Proceed to previous step
	const previousStep = () => {
		setState({
			...state,
			step: state.step - 1,
		});
	};

	// Handle changes
	const handleChange = (input, e) => {
		setState({
			...state,
			[input]: e.target.value,
		});
	};

	switch (state.step) {
		case 1:
			return <FormUserDetails nextStep={nextStep} handleChange={handleChange} state={state} />;

		case 2:
			return (
				<FormPersonalDetails
					nextStep={nextStep}
					handleChange={handleChange}
					state={state}
					previousStep={previousStep}
				/>
			);
		case 3:
			return <Confirm nextStep={nextStep} state={state} previousStep={previousStep} />;
		case 4:
			return <Success />;
		default:
			return <div>Default</div>;
	}
};
