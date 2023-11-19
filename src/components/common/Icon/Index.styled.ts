import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';

interface IconContainer {
	width?: string | number;
	height?: string | number;
}

export const IconContainer = styled(Box, {
	shouldForwardProp: prop => prop !== 'width' && prop !== 'height',
})<IconContainer>(({ width, height }) => ({
	width: width ?? '1.6rem',
	height: !width && !height ? '1.6rem' : height ? height : width,

	svg: {
		fill: '#FFFFFF',
		display: 'inline-block',
		width: '100%',
		aspectRatio: 1,
	},
}));

export const IconImage = styled('img')({
	aspectRatio: 1,
	width: '100%',
});
