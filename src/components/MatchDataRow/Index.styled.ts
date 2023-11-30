import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/material/styles';

export const MatchDataRowContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	borderTop: `1px solid ${alpha(theme.palette.grey.main, 0.87)}`,
	borderLeft: `1px solid ${alpha(theme.palette.grey.main, 0.87)}`,
	borderRight: `1px solid ${alpha(theme.palette.grey.main, 0.87)}`,
	background: '#FFFFFF',
	    height: "38px"
}));

export const MatchTimeAndFavouriteContainer = styled('div')(({ theme }) => ({
	display: 'grid',
	placeContent: 'center',

	'& .icon': {
		display: 'none',
	},

	[theme.breakpoints.up(1024)]: {
		'& .match-data__time': {
			display: 'none',
		},

		'& .icon': {
			display: 'block',
			marginLeft: '0.8rem',
		},
	},
}));

export const MatchTiming = styled('p')(() => ({
	textAlign: 'center',
	// color: theme.palette.primary[300],
	fontSize: '1rem',
	lineHeight: '120%',
	display: 'flex',
	flexDirection: 'column',
	alignSelf: 'center',
	padding: '0.8rem 1.6rem',
	width: '7.7rem',
}));

export const MatchBody = styled('div')(({ theme }) => ({
	padding: '0 1rem 0 0.6rem',
	alignSelf: 'stretch',
	display: 'flex',
	alignItems: 'center',
	borderLeft: '1px solid #DDDDDD',
	borderRight: '1px solid #DDDDDD',
	minWidth: '9rem',
	width: 'calc(100% - 145px)',
	position: 'relative',

	'& .icon': {
		cursor: 'pointer',
		position: 'absolute',
		right: '4px',
		top: '4px',
	},

	[theme.breakpoints.up(1024)]: {
		width: 'auto',
		flexGrow: 1,
		borderLeft: 'none',
	},
}));

export const MatchName = styled('div')(({ theme }) => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	fontSize: '1.2rem',
	fontFamily: 'Helvetica Neue',
	fontWeight: 700,
	color: '#000000',
	cursor: 'pointer',

	'& span': {
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		display: 'block',
	},

	[theme.breakpoints.up(1024)]: {
		fontSize: '1.1rem',
	},
}));

export const MatchOddsWrapper = styled('div')(({ theme }) => ({
	width: '160px',
	alignSelf: 'stretch',
	position: 'relative',
	overflow: 'hidden',

	[theme.breakpoints.up(1024)]: {
		width: 'auto',
	},
}));
export const BettingPopUpmobileViewShow = styled('div')(({ theme }) => ({
	[theme.breakpoints.up(1024)]: {
		display: "none",
	},
}));

interface MatchOddsGridContainerProps {
	isSwiped: boolean;
}

export const MatchOddsGridContainer = styled(
	'div'
)<MatchOddsGridContainerProps>(({ theme, isSwiped }) => ({
	height: '100%',
	position: 'absolute',
	transform: isSwiped ? 'translateX(-48%)' : 'translateX(0)',

	transition: theme.transitions.create(['transform'], {
		duration: 500,
		easing: theme.transitions.easing.easeInOut,
	}),

	[theme.breakpoints.up(1024)]: {
		position: 'static',
	},
}));

export const MatchOddsGrid = styled('div')(({ theme }) => ({
	height: '100%',
	display: 'grid',
	gridTemplate: '"team1back drawback team2back team1lay drawlay team2lay"',

	[theme.breakpoints.up(1024)]: {
		gridTemplate: '"team1back team1lay drawback drawlay team2back team2lay"',
		columnGap: 0,
	},
}));
