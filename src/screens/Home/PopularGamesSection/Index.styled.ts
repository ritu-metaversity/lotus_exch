import styled from '@mui/material/styles/styled';

export const PopularGamesSectionContainer = styled('div')({
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

export const PopularGamesContainer = styled('div')({
	overflow: 'scroll',
	margin: '1.2rem 0 0 0',
	scrollbarWidth: 'none',
	msOverflowStyle: 'none',

	'&::-webkit-scrollbar': {
		display: 'none',
	},
});

export const PopularGamesGrid = styled('div')({
	display: 'grid',
	gridTemplateColumns: 'repeat(4, min-content)',
	justifyContent: 'space-between',
	gap: '0.6rem 1rem',
	placeItems: 'center',
});

export const GameImage = styled('img')(({ theme }) => ({
	width: '10rem',

	[theme.breakpoints.up(1024)]: {
		width: '13rem',
	},
}));
