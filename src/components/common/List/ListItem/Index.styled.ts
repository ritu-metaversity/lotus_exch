import styled from '@mui/material/styles/styled';

interface ListItemContainerProps {
	hover?: boolean;
	selected?: boolean;
}

export const ListItemContainerWrapper = styled('div')(({ theme }) => ({
	overflow: 'hidden',
	borderBottom: `1px solid ${theme.palette.grey[400]}`,
}));

export const ListItemContainer = styled('div')<ListItemContainerProps>(
	({ theme, hover, selected }) => ({
		padding: '18px 18px',
		display: 'flex',
		gap: '1rem',
		alignItems: 'center',
		fontSize: '2.2rem',
		background: selected ? theme.palette.grey[300] : 'inherit',

		'&:hover': hover
			? {
					cursor: 'pointer',
					background: theme.palette.grey[200],
			  }
			: {},
		[theme.breakpoints.down(460)]: {
			padding: '21px 113px 14px 16px',
			display: 'flex',
			gap: '1rem',
			alignItems: 'center',
			fontSize: '2.2rem',
			background: selected ? theme.palette.grey[300] : 'inherit',

			'&:hover': hover
				? {
						cursor: 'pointer',
						background: theme.palette.grey[200],
				  }
				: {},
		},
	})
);

export const ListItemIcon = styled('div')({});

export const ListItemLabel = styled('div')(({ theme }) => ({
	color: '#000000',
	fontSize: '12px',
	fontWeight: 600,
	[theme.breakpoints.down(460)]: {
		color: '#000000',
		fontSize: '16px',
		fontWeight: 700,
	},
}));
export const ListItemLabelsdsdfsdfsd = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '10px',
	color: '#000000',
	fontSize: '12px',
	fontWeight: 600,
	[theme.breakpoints.down(460)]: {
		color: '#000000',
		fontSize: '16px',
		fontWeight: 700,
	},
}));
