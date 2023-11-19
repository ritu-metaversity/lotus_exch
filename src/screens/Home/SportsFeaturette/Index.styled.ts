import styled from '@mui/material/styles/styled';

export const SportsFeaturetteContainer = styled('div')(({ theme }) => ({
	margin: '1.5rem 0',
	overflow: 'scroll',
	scrollbarWidth: 'none',
	msOverflowStyle: 'none',

	'& .featured-sports-container': {
		minWidth: '17rem',
	},

	'&::-webkit-scrollbar': {
		display: 'none',
	},

	[theme.breakpoints.up(1512)]: {
		margin: '0 0 2rem 0',
	},
}));

export const SportsFeaturetteGrid = styled('div')(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(5, 1fr)',
	gap: '0.7rem 0.5rem',

	[theme.breakpoints.up(1024)]: {
		gap: '0.7rem 1.5rem',
	},
}));
