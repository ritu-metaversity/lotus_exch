import styled from '@mui/material/styles/styled';

export const CardSectionContainer = styled('div')({
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

export const CardGamesContainer = styled('div')({
	overflow: 'scroll',
	margin: '1.2rem 0 0 0',
	scrollbarWidth: 'none',
	msOverflowStyle: 'none',

	'&::-webkit-scrollbar': {
		display: 'none',
	},
});

export const CardGamesGrid = styled('div')({
	display: 'grid',
	gridTemplateColumns: 'repeat(12, min-content)',
	gap: '1.4rem 1rem',
	placeItems: 'center',
});

export const CardGamesImage = styled('img')({
	width: '17rem',
	borderRadius: '5px',
});
