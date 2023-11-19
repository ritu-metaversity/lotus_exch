import styled from '@mui/material/styles/styled';
import ArrowIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export const MatchStatsContainer = styled('div')(({ theme }) => ({
	paddingTop: '0rem',

	'& .sports-header': {
		background: theme.palette.primary.main,
		alignItem:"center"
	},

	'& .sports-header__name': {
		color: '#FFFFFF',
		fontSize:"12px"
	},

	'& .sports-header__description': {
		color: '#FFFFFF',
	},

	'& .sports-header__content': {
		color: '#FFFFFF',
		flexGrow: 0,
		alignSelf: 'center',
	},
}));

export const IframeContainer = styled('div')({
	height: '100%',
});

export const StyledIframe = styled('iframe')(({ theme }) => ({
	width: '100%',
	height: '400px',

	[theme.breakpoints.up(500)]: {
		height: '280px',
	},
}));

interface StyledArrowIconProps {
	expanded: boolean;
}

export const StyledArrowIcon = styled(ArrowIcon, {
	shouldForwardProp: prop => prop !== 'expanded',
})<StyledArrowIconProps>(({ expanded }) => ({
	fontSize: 'inherit',
	color: 'inherit',
	transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)',
}));
