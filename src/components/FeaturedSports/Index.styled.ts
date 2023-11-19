import styled from '@mui/material/styles/styled';

interface FeaturedSportsProps {
	bgImage: string;
}

export const FeaturedSportsContainer = styled('div', {
	shouldForwardProp: prop => prop !== 'bgImage',
})<FeaturedSportsProps>(({ bgImage }) => ({
	borderRadius: '4px',
	display: 'flex',
	justifyContent: 'space-between',
	background: `url(${bgImage}) lightgray 50% / cover no-repeat`,
	overflow: 'hidden',
	cursor: 'pointer',
}));

export const FeaturesSportsName = styled('div')({
	display: 'flex',
	alignItems: 'center',
	columnGap: '0.5rem',
	flex: 1,
	whiteSpace: 'nowrap',
	padding: '1rem',

	'& span': {
		color: '#FFFFFF',
		fontSize: '1.2rem',
		fontWeight: 700,
	},
});
