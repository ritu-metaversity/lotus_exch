import { alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';

export const ChangePasswordWrapper = styled(Box)(({ theme }) => ({
	background: theme.palette.grey[1200],

	[theme.breakpoints.up(768)]: {
		backgroundImage: 'url(/assets/images/auth-banner.png)',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
}));

export const ChangePasswordContainer = styled(Box)({
	padding: '1.5rem',
	maxWidth: '768px',
	margin: '0 auto',
});

export const ChangePasswordHeading = styled(Box)(({ theme }) => ({
	textAlign: 'center',
	fontSize: '2.4rem',
	color: '#FFFFFF',
	fontWeight: 500,
	padding: '2.4rem 0',

	[theme.breakpoints.up(768)]: {
		display: 'block',
		fontSize: '9.6rem',
		fontWeight: 600,
		textAlign: 'center',
		marginBottom: '4rem',
		textTransform: 'uppercase',
	},
}));

export const ChangePasswordHeroImage = styled(Box)(({ theme }) => ({
	maxWidth: '768px',
	margin: '0 auto',

	'& img': {
		width: '100%',
		display: 'block',
	},

	[theme.breakpoints.up(768)]: {
		display: 'none',
	},
}));

export const ChangePasswordForm = styled('form')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '1.6rem',

	'& .MuiBox-root': {
		width: '100%',
	},

	[theme.breakpoints.up(1512)]: {
		gap: '2.4rem',
	},
}));

export const ChangePasswordButton = styled(Button)({
	flex: 1,

	'&:hover': {
		color: '#FFFFFF',
	},
});

export const ChangePasswordButtonContainer = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	gap: '1.2rem',
});

export const SignInButton = styled(Link)(({ theme }) => ({
	display: 'block',
	width: '100%',
	textDecoration: 'none',
	fontSize: '1.4rem',
	fontWeight: 600,
	color: '#FFFFFF',
	margin: '3rem',
	textAlign: 'center',

	span: {
		color: theme.palette.accent.main,
	},

	[theme.breakpoints.up(1512)]: {
		fontSize: '2.4rem',
		padding: '2.3rem',
		borderRadius: '8px',
		border: `1px solid ${theme.palette.primary.main}`,
		background: alpha(theme.palette.grey[1200], 0.5),

		boxShadow: `-53.03333282470703px 53.03333282470703px 53.03333282470703px 0px ${alpha(
			theme.palette.grey[1200],
			0.5
		)} inset, 53.03333282470703px -53.03333282470703px 53.03333282470703px 0px ${alpha(
			theme.palette.grey[1200],
			0.5
		)} inset`,
		backdropFilter: 'blur(35px)',
	},
}));

export const StyledDialog = styled(Dialog)({
	background: 'rgba(30, 128, 103, 0.10)',
	boxShadow:
		'-41px 41px 41px 0px rgba(255, 255, 255, 0.10) inset, 41px -41px 41px 0px rgba(23, 97, 78, 0.10) inset',
	backdropFilter: 'blur(41px)',
});

/* PASSWORD RESET SUCCESSFUL MODAL */
export const PasswordResetModalContainer = styled('div')(({ theme }) => ({
	padding: '2rem 3rem',
	textAlign: 'center',
	color: theme.palette.grey[1200],
}));

export const PasswordResetModalImage = styled('div')({});

export const PasswordResetModalHeading = styled('div')({
	fontSize: '2rem',
	fontWeight: 500,
	margin: '2rem 0 1.6rem',
});

export const PasswordResetModalDescription = styled('div')({
	fontSize: '1.6rem',
	marginBottom: '3.3rem',
});

export const PasswordResetModalButton = styled(Button)({});
