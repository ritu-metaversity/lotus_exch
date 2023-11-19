import styled from '@mui/material/styles/styled';

type SidebarContainerProps = { expanded: boolean };

export const SidebarContainerDesktop = styled('div')(
	({ theme,  }) => ({
		background: '#FFFFFF',
		transition: theme.transitions.create('width', { duration: 300 }),
		[theme.breakpoints.up("sm")]:{
			marginRight: "24px",
		},
		'& .list-item:hover': {
			transform: 'scale(1.1)',
		},

		'& .list-item': {
			transition: theme.transitions.create('transform', { duration: 300 }),
		},

		'& .list-item-container': {
			whiteSpace: 'nowrap',
		},

		'& .icon': {
			fill: 'initial',	
			display: 'flex',
			'--size': '2rem',
			width: 'var(--size)',
			height: 'var(--size)',
		},

		[theme.breakpoints.up(1024)]: {
			width: '13.5%',
		},
	})
);

export const SidebarContainerMobile = styled('div')<SidebarContainerProps>(
	({ theme, expanded }) => ({
		background: '#FFFFFF',
		transition: theme.transitions.create('width', { duration: 300 }),
		[theme.breakpoints.up("sm")]:{
			width: expanded ? 230 : 0,
			marginRight: "15px",
		},
		'& .list-item:hover': {
			transform: 'scale(1.1)',
		},

		'& .list-item': {
			transition: theme.transitions.create('transform', { duration: 300 }),
		},

		'& .list-item-container': {
			whiteSpace: 'nowrap',
		},

		'& .icon': {
			fill: 'initial',
			display: 'flex',
			'--size': '2rem',
			width: 'var(--size)',
			height: 'var(--size)',
		},

		[theme.breakpoints.up(1024)]: {
			width: '15%',
		},
	})
);