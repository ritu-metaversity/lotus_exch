import { alpha } from '@mui/material';
import styled from '@mui/material/styles/styled';

export const SportsButtonContainer = styled('div')(({ theme }) => ({
	backgroundImage: 'url("/assets/images/sports-button-bg.png")',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	position: 'relative',
	height: '4.3rem',
	width: '9.2rem',
	borderRadius: '4px',
	overflow: 'hidden',

	[theme.breakpoints.up(1024)]: {
		width: '18.8rem',
		height: '6.6rem',
	},
}));

export const SportsButtonBody = styled('div')({});

export const SportsButtonHeading = styled('div')(({ theme }) => ({
	color: alpha('#FFFFFF', 0.15),
	fontSize: '1.4rem',
	textAlign: 'center',
	whiteSpace: 'nowrap',
	position: 'absolute',
	lineHeight: '120%',
	left: 0,
	right: 0,

	[theme.breakpoints.up(1024)]: {
		fontSize: '2.7rem',
	},
}));

export const SportsButtonTitle = styled('div')(({ theme }) => ({
	color: '#FFFFFF',
	fontSize: '1.2rem',
	position: 'absolute',
	bottom: '0.5rem',
	left: '0.8rem',
	lineHeight: '120%',

	[theme.breakpoints.up(1024)]: {
		fontSize: '1.5rem',
	},
}));

export const SportButtonIcon = styled('div')(({ theme }) => ({
	fontSize: '2rem',
	color: '#FFFFFF',
	position: 'absolute',
	top: '0.4rem',
	right: '0.4rem',

	[theme.breakpoints.up(1024)]: {
		fontSize: '3rem',
	},
}));
