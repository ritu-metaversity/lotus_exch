import { alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const SignUpWrapper = styled(Box)(({ theme }) => ({
	background: theme.palette.grey[1200],

	[theme.breakpoints.up(768)]: {
		backgroundImage: 'url(/assets/images/auth-banner.png)',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
}));

export const SignUpContainer = styled(Box)({
	padding: '1.5rem',
	maxWidth: '768px',
	margin: '0 auto',
});

export const SignUpHeading = styled(Box)(({ theme }) => ({
	display: 'none',

	[theme.breakpoints.up(768)]: {
		display: 'block',
		fontSize: '9.6rem',
		fontWeight: 600,
		color: '#FFFFFF',
		textAlign: 'center',
		marginBottom: '4rem',
		textTransform: 'uppercase',
	},
}));

export const SignUpHeroImage = styled(Box)(({ theme }) => ({
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

export const SignUpForm = styled('form')(({ theme }) => ({
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

export const SignUpAgreement = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: '8px',
	alignItems: 'start',

	'& .MuiCheckbox-root': {
		scale: '1.4',
		paddingLeft: '0',

		[theme.breakpoints.up(1512)]: {
			scale: '1.8',
			paddingTop: '1rem',
		},
	},
}));

export const AgreementPrompt = styled(Box)(({ theme }) => ({
	fontSize: '1.4rem',
	fontWeight: 500,
	color: theme.palette.grey[600],

	'& a': {
		textDecoration: 'none',
		color: 'dogerblue',
	},

	[theme.breakpoints.up(1512)]: {
		fontSize: '2.4rem',
	},
}));

export const SignInButton = styled(Button)(({ theme }) => ({
	color: '#FFFFFF',
	flex: 1,

	'&:hover': {
		color: 'inherit',
	},

	[theme.breakpoints.up(1512)]: {
		display: 'none',
	},
}));

export const SignUpButton = styled(Button)({
	flex: 1,

	'&:hover': {
		color: '#FFFFFF',
	},
});

export const SignUpButtonContainer = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	gap: '1.2rem',
});

export const LoginPrompt = styled(Link)(({ theme }) => ({
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
