import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';

export const CarouselContainer = styled(Box)({
	// margin: 'auto -1rem',
	width:"100%"
});

export const CarouselImagesContainer = styled('div')(({ theme }) => ({
	width: '31rem',
	height: '15rem',
	padding: '0 1rem',

	[theme.breakpoints.down(460)]: {
		width: '100vw',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 'auto',
	},
}));

interface CarouselImageProps {
	src: string;
}

export const CarouselImage = styled('div', {
	shouldForwardProp: prop => prop !== 'src',
})<CarouselImageProps>(({ theme, src }) => ({
	height: '15rem',
	borderRadius: '10px',
	width: '30rem',
	backgroundImage: `url(${src})`,
	backgroundColor: 'initial',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '50%',
	backgroundSize: 'auto 100%',

	[theme.breakpoints.down(460)]: {
		height: '20rem',
		width: 'calc(100vw - 30px)',
		backgroundSize: 'cover',
	},

	[theme.breakpoints.down(420)]: {
		height: '16rem',
	},

	[theme.breakpoints.down(375)]: {
		height: '16rem',
	},
}));
