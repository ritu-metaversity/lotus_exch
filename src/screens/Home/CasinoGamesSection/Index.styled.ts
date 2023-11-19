import styled from '@mui/material/styles/styled';

export const CasinoSectionContainer = styled('div')({
	marginTop: '1.2rem',

	'& .section__header': {
		background: '#FFFFFF',
	},

	'& .section__header__title': {
		color: '#000000',
	},

	'& .icon': {
		display: 'flex',
		height: 'auto',
	},
});

export const CasinoGamesContainer = styled('div')({
	overflow: 'scroll',
	margin: '1.2rem 0 0 0',
	scrollbarWidth: 'none',
	msOverflowStyle: 'none',

	'&::-webkit-scrollbar': {
		display: 'none',
	},
});

export const CasinoGamesGrid = styled('div')({
	display: 'grid',
	gridTemplateColumns: 'repeat(5, min-content)',
	gap: '0.3rem 0.5rem',
	justifyContent: 'space-between',
});

export const CasinoGamesImage = styled('img')({
	width: '100%',
	// borderRadius: '5px',
});
