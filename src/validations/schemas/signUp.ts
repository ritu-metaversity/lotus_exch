import * as yup from 'yup';
import { SignUpReq } from '../../state/apis/main/apiSlice.types';

export interface SignUpFormData extends Omit<SignUpReq, 'appUrl'> {
	confirmPassword: string;
}

export const signUpSchema: yup.ObjectSchema<SignUpFormData> = yup.object({
	userId: yup
		.string()
		.min(2, 'User Id must be at least 2 characters long')
		.max(30, 'User Id must be at most 30 characters long')
		.required()
		.label('User Id'),
	username: yup.string().required().label('Name'),
	mobile: yup
		.string()
		.matches(/^[0-9]{10}$/, 'Invalid mobile number')
		.test(
			'minValue',
			'Mobile number must be greater than or equal to 1111111111',
			value => {
				return Number(value) >= 1111111111;
			}
		)
		.required()
		.label('Mobile'),
	password: yup
		.string()
		.min(4, 'Password must be at least 4 characters long')
		.max(30, 'Password must be at most 30 characters long')
		.required()
		.label('Password'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords must match')
		.required()
		.label('Confirm Password'),
});
