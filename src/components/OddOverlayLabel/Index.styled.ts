import styled from '@mui/material/styles/styled';

export const OddOverlayLabelContainer = styled('div')(({ theme }) => ({
	gridArea: 'game-status',
	background: theme.palette.grey.light,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	textTransform: 'uppercase',
	fontSize: '1.2rem',
	fontWeight: 500,
	color: '#000000',

	[theme.breakpoints.up(1024)]: {
		fontSize: '1.6rem',
	},
}));
