import styled from '@mui/material/styles/styled';

export const OddsHeaderContainer = styled('div')(({ theme }) => ({
	'& .sports-header': {
		background: 'transparent',
		borderTop: 'none',
		borderBottom: 'none',
		marginRight: '0.6rem',
		height: '38px',
		alignItem: 'center',
	},

	'& .sports-header__description': {
		color: theme.palette.accent.main,
	},

	'& .sports-header__name': {
		fontSize: '1.2rem',
	},

	'& .sports-header__content': {
		flex: 0,
	},

	[theme.breakpoints.up(1024)]: {
		'& .sports-header': {
			paddingRight: 0,
			marginRight: 0,
		},
	},

	[theme.breakpoints.up(1512)]: {
		'& .sports-header': {
			paddingLeft: 0,
			alignItems: 'center',
		},
	},
}));

export const OddsHeaderContentContainer = styled('div')(({ theme }) => ({
	fontSize: '1.2rem',
	height: '100%',
	display: 'grid',
	width: '10rem',
	gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
	gridTemplateAreas: '"label1 label2"',
	textAlign: 'center',
	alignItems: 'center',

	'& .odds-header-content': {
		fontSize: '1.2rem',
	},

	'& p:first-of-type': { gridArea: 'label1' },
	'& p:last-of-type': { gridArea: 'label2' },

	[theme.breakpoints.up(1024)]: {
		width: '34.2rem',
		gap: '1px',
		marginRight: '45px',
		gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
		gridTemplateAreas: '". . label1 label2 . ."',
	},
}));
