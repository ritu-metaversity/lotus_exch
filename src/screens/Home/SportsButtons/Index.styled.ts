import styled from '@mui/material/styles/styled';

export const SportsButtonsContainer = styled('div')({
	display: 'flex',
	gap: '1rem',
	margin: '1.5rem 0',
});

/* SPORTS BUTTON */
interface SportsButtonContainerProps {
	backgroundImage: string;
}

export const SportsButtonContainer = styled('div')<SportsButtonContainerProps>(
	({ backgroundImage }) => ({
		paddingTop: '5px',
		paddingLeft: '5px',
		boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
		background: `url(${backgroundImage})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		borderRadius: '3px',
		overflow: 'hidden',
		flex: 1,
	})
);

export const SportsButtonTitle = styled('div')({
	fontSize: '1.2rem',
	color: '#fff',
	fontWeight: 700,
	whiteSpace: 'nowrap',
});
