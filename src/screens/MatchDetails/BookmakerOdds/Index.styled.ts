import styled from '@mui/material/styles/styled';

export const BookmakerOddsContainer = styled('div')({});

const oddCellStyles = {
	opacity: 0.3,
	PointerEvent: 'none',
	cursor: 'unset',
};

interface BookmakerOddsGridProps {
	isBetOpened: boolean;
}

export const BookmakerOddsGrid = styled('div')<BookmakerOddsGridProps>(
	({ theme, isBetOpened }) => ({
		height: '100%',
		display: 'grid',
		columnGap: '1px',
		width: '100%',
		
		gridTemplate: isBetOpened
			? '"team1back team1lay"'
			: '"game-status game-status"',

		'& .odd-overlay-label': {
			width: '100%',
			padding: '0.5rem',
		},

		'& .odd': { cursor: 'pointer' },

		'& .team2back': { display: 'none' },
		'& .team2lay': { display: 'none' },
		'& .drawback': { display: 'none' },
		'& .drawlay': { display: 'none' },

		[theme.breakpoints.up(1024)]: {
			gridTemplate: isBetOpened
				? '"team2back drawback team1back team1lay drawlay team2lay"'
				: '"game-status game-status game-status game-status game-status game-status"',

			'& .odd-overlay-label': {
				width: '100%',
			},

			'& .team2back': {
				...oddCellStyles,
				display: isBetOpened ? 'flex' : 'none',
			},
			'& .team2lay': {
				...oddCellStyles,
				display: isBetOpened ? 'flex' : 'none',
			},
			'& .drawback': {
				...oddCellStyles,
				display: isBetOpened ? 'flex' : 'none',
			},
			'& .drawlay': {
				...oddCellStyles,
				display: isBetOpened ? 'flex' : 'none',
			},
		},
	})
);
