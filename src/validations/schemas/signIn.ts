import * as yup from 'yup';

export interface SignInFormData {
	userId: string;
	password: string;
}

export const signInSchema: yup.ObjectSchema<SignInFormData> = yup.object({
	userId: yup.string().required().label('User Id'),
	password: yup
		.string()
		.min(4, 'Password must be at least 4 characters long')
		.max(30, 'Password must be at most 30 characters long')
		.required()
		.label('Password'),
});
