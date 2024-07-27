import { alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const SignInWrapper = styled(Box)(({ theme }) => ({
	background: theme.palette.grey[1200],
	// height: "100vh",

	[theme.breakpoints.up(768)]: {
		// backgroundImage: 'url(/assets/images/auth-banner.png)',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
}));

export const SignInContainer = styled(Box)({
	padding: '1.5rem',
	maxWidth: '768px',
	margin: '0 auto',
});

export const SignInHeading = styled(Box)(({ theme }) => ({
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

export const SignInHeroImage = styled(Box)(({ theme }) => ({
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

export const SignInForm = styled('form')(({ theme }) => ({
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

export const SignInButton = styled(Button)({
	color: '#FFFFFF',
	flex: 1,
	height:"48px",

	'&:hover': {
		color: 'inherit',
	},
});

export const SignUpButton = styled(Button)(({ theme }) => ({
	flex: 1,
	height:"48px",
	'&:hover': {
		color: '#FFFFFF',
	},

	[theme.breakpoints.up(1512)]: {
		display: 'none',
	},
}));

export const SignInButtonContainer = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	gap: '1.2rem',
});

export const RegisterPrompt = styled(Link)(({ theme }) => ({
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
