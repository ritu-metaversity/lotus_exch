import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { logout } from '../../state/features/auth/authSlice';
import {
	PasswordResetModalButton,
	PasswordResetModalContainer,
	PasswordResetModalDescription,
	PasswordResetModalHeading,
	PasswordResetModalImage,
} from './Index.styled';

const PasswordResetSuccessModal = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const navigateToSignIn = () => {
		dispatch(logout());
		navigate('/signin');
	};

	return (
		<PasswordResetModalContainer>
			<PasswordResetModalImage>
				<img src='assets/images/reset.svg' alt='' />
			</PasswordResetModalImage>
			<PasswordResetModalHeading>PASSWORD RESET</PasswordResetModalHeading>
			<PasswordResetModalDescription>
				Your password has been reset successfully
			</PasswordResetModalDescription>

			<PasswordResetModalButton
				onClick={navigateToSignIn}
				variant='contained-accent'
			>
				SIGN IN
			</PasswordResetModalButton>
		</PasswordResetModalContainer>
	);
};

export default PasswordResetSuccessModal;
