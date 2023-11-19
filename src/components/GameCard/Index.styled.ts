import { alpha } from '@mui/material';
import styled from '@mui/material/styles/styled';

export const GameCardContainer = styled('div')({
	borderRadius: '4px',
	position: 'relative',
	maxWidth: '240px',
});

export const GameCardImage = styled('div')({
	'& img': {
		display: 'block',
		width: '100%',
	},
});

export const GameCardBody = styled('div')({
	padding: '1rem',
	position: 'absolute',
	bottom: 0,
	left: 0,
	right: 0,
	borderRadius: '0.4rem',
	background: alpha('#000000', 0.1),
	boxShadow: `-9px 9px 9px 0px ${alpha(
		'#FFFFFF',
		0.1
	)} inset, 9px -9px 9px 0px ${alpha('#FFFFFF', 0.1)} inset`,
	backdropFilter: 'blur(9px)',
});

export const GameCardTitle = styled('div')(({ theme }) => ({
	color: '#FFFFFF',
	fontSize: '1.4rem',

	[theme.breakpoints.up(1512)]: {
		fontSize: '2rem',
	},
}));

export const GameCardDescription = styled('div')(({ theme }) => ({
	fontSize: '1.2rem',
	fontWeight: 300,
	color: alpha('#FFFFFF', 0.52),

	[theme.breakpoints.up(1512)]: {
		fontSize: '1.4rem',
	},
}));
