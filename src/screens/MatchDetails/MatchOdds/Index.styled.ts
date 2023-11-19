import styled from '@mui/material/styles/styled';

export const MatchOddsContainer = styled('div')({});

interface MatchOddsGridProps {
	isBetOpened: boolean;
}

export const MatchOddsGrid = styled('div')<MatchOddsGridProps>(
	({ theme, isBetOpened }) => ({
		height: '100%',
		display: 'grid',
		width: '100%',

		columnGap: '1px',
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
				display: 'flex',
				cursor: 'not-allowed',
				background: theme.palette.back.main,
			},
			'& .team2lay': {
				display: 'flex',
				cursor: 'not-allowed',
				background: theme.palette.lay.main,
			},
			'& .drawback': {
				display: 'flex',
				cursor: 'not-allowed',
				background: theme.palette.back.main,
			},
			'& .drawlay': {
				display: 'flex',
				cursor: 'not-allowed',
				background: theme.palette.lay.main,
			},
		},
	})
);
