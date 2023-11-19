import * as yup from 'yup';

export interface ChangePasswordData {
	oldPassword: string;
	newPassword: string;
	confirmNewPassword: string;
}

export const changePasswordSchema: yup.ObjectSchema<ChangePasswordData> =
	yup.object({
		oldPassword: yup
			.string()
			.min(4, 'Password must be at least 4 characters long')
			.max(30, 'Password must be at most 30 characters long')
			.required()
			.label('Old Password'),
		newPassword: yup
			.string()
			.min(4, 'Password must be at least 4 characters long')
			.max(30, 'Password must be at most 30 characters long')
			.required()
			.label('New Password'),
		confirmNewPassword: yup
			.string()
			.oneOf([yup.ref('newPassword')], 'New passwords must match')
			.required()
			.label('Confirm New Password'),
	});
