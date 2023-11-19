import { useEffect, useState, MouseEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../components/common/Input/Index';
import EyeOpen from '@mui/icons-material/RemoveRedEye';
import EyeClose from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import {
	ChangePasswordContainer,
	ChangePasswordForm,
	ChangePasswordButtonContainer,
	ChangePasswordButton,
	ChangePasswordHeroImage,
	ChangePasswordWrapper,
	ChangePasswordHeading,
	SignInButton,
	StyledDialog,
} from './Index.styled';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { logout, selectUser } from '../../state/features/auth/authSlice';
import {
	ChangePasswordData,
	changePasswordSchema,
} from '../../validations/schemas/changePassword';
import { useChangePasswordMutation } from '../../state/apis/main/apiSlice';
import PasswordResetSuccessModal from './PasswordResetSuccessModal';

const initialFormValues: ChangePasswordData = {
	oldPassword: '',
	newPassword: '',
	confirmNewPassword: '',
};

type ChangePasswordVisibility = {
	[x in keyof ChangePasswordData]: boolean;
};

const ChangePassword = () => {
	const user = useAppSelector(selectUser);

	const dispatch = useAppDispatch();
	const [showModal, setShowModal] = useState(false);
	const [showPassword, setShowPassword] = useState<ChangePasswordVisibility>(
		{} as ChangePasswordVisibility
	);

	const [changePassword, { isLoading, data, error }] =
		useChangePasswordMutation();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<ChangePasswordData>({
		defaultValues: initialFormValues,
		resolver: yupResolver(changePasswordSchema),
	});

	useEffect(() => {
		if (data?.status) setShowModal(true);

		if (data?.status === false && data.message) {
			const message = data.message;
			toast.error(message);
		}

		if (error && 'data' in error) {
			const message = (error.data as { message: string }).message;
			toast.error(message);
		}
	}, [data, error]);

	const closeModal = () => dispatch(logout());

	const handlePasswordVisibility = (
		e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	) => {
		const { name } = e.currentTarget;

		if (name === 'oldPassword')
			setShowPassword(prev => ({ ...prev, oldPassword: !prev.oldPassword }));
		else if (name === 'newPassword')
			setShowPassword(prev => ({ ...prev, newPassword: !prev.newPassword }));
		else if (name === 'confirmNewPassword')
			setShowPassword(prev => ({
				...prev,
				confirmNewPassword: !prev.confirmNewPassword,
			}));
	};

	const onChangePasswordFormSubmit = (data: ChangePasswordData) => {
		const userid = user?.userId;
		const token = user?.token;
		if (userid && token) changePassword({ ...data, userid, token });
	};

	if (!user || user.passwordtype !== 'old') return <Navigate to='/' />;

	return (
		<>
			<ChangePasswordWrapper>
				<ChangePasswordHeroImage>
					<img src='/assets/images/mobile-auth-banner.png' alt='' />
				</ChangePasswordHeroImage>
				<ChangePasswordHeading>Change Password</ChangePasswordHeading>
				<ChangePasswordContainer>
					<ChangePasswordForm
						onSubmit={handleSubmit(onChangePasswordFormSubmit)}
					>
						<Controller
							name='oldPassword'
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									placeholder='Old Password'
									error={!!errors.oldPassword}
									errorMessage={errors.oldPassword?.message}
									type={showPassword.oldPassword ? 'text' : 'password'}
									endAdornment={
										<IconButton
											name='oldPassword'
											onClick={handlePasswordVisibility}
										>
											{showPassword.oldPassword ? <EyeClose /> : <EyeOpen />}
										</IconButton>
									}
								/>
							)}
						/>
						<Controller
							name='newPassword'
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									placeholder='New Password'
									error={!!errors.newPassword}
									errorMessage={errors.newPassword?.message}
									type={showPassword.newPassword ? 'text' : 'password'}
									endAdornment={
										<IconButton
											name='newPassword'
											onClick={handlePasswordVisibility}
										>
											{showPassword.newPassword ? <EyeClose /> : <EyeOpen />}
										</IconButton>
									}
								/>
							)}
						/>
						<Controller
							name='confirmNewPassword'
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									placeholder='Confirm New Password'
									error={!!errors.confirmNewPassword}
									errorMessage={errors.confirmNewPassword?.message}
									type={showPassword.confirmNewPassword ? 'text' : 'password'}
									endAdornment={
										<IconButton
											name='confirmNewPassword'
											onClick={handlePasswordVisibility}
										>
											{showPassword.confirmNewPassword ? (
												<EyeClose />
											) : (
												<EyeOpen />
											)}
										</IconButton>
									}
								/>
							)}
						/>
						<ChangePasswordButtonContainer>
							<ChangePasswordButton
								disabled={isLoading}
								type='submit'
								variant='contained-accent'
							>
								{isLoading ? 'Please Wait...' : 'Change Password'}
							</ChangePasswordButton>
						</ChangePasswordButtonContainer>
						<SignInButton to='/signin'>
							<span>Back to login</span>
						</SignInButton>
					</ChangePasswordForm>
				</ChangePasswordContainer>
			</ChangePasswordWrapper>

			<StyledDialog onClose={closeModal} open={showModal}>
				<PasswordResetSuccessModal />
			</StyledDialog>
		</>
	);
};

export default ChangePassword;
