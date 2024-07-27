import styled from '@mui/material/styles/styled';

export const FancyContainer = styled('div')({});

export const FancyOddsContainer = styled('div')({});

const oddCellStyles = {
	opacity: 0.3,
	PointerEvent: 'none',
	cursor: 'unset',
};

interface FancyOddsGridProps {
	isBetOpened: boolean;
}

export const FancyOddsGrid = styled('div')<FancyOddsGridProps>(
	({ theme}) => ({
		// "&::after":{
		// 	content:JSON.stringify(content),
		// 	position:"absolute",
		// 	width:"100%",
		// 	height:"100%",
		// 	background:"red"
		// },
		// position:"relative",
		height: '100%',
		width: '100%',
		display: 'grid',
		columnGap: '1px',

		// gridTemplate: isBetOpened
		// 	? '"team1back team1lay"'
		// 	: '"game-status game-status"',

		gridTemplateColumns:"repeat(2, 1fr)",

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
			// gridTemplate: isBetOpened
			// 	? '"team2back drawback team1back team1lay drawlay team2lay"'
			// 	: '"game-status game-status game-status game-status game-status game-status"',
			gridTemplateColumns:"repeat(6, 1fr)",

			'& .odd-overlay-label': {
				width: '100%',
			},

			'& .team2back': {
				...oddCellStyles,
				display:  'flex' ,
			},
			'& .team2lay': {
				...oddCellStyles,
				display:  'flex' ,
			},
			'& .drawback': {
				...oddCellStyles,
				display:  'flex' ,
			},
			'& .drawlay': {
				...oddCellStyles,
				display:  'flex' ,
			},
		},
	})
);

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
	grid:"1/1",

	[theme.breakpoints.up(1024)]: {
		fontSize: '1.6rem',
	},
}));