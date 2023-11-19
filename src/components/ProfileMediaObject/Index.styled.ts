import styled from '@mui/material/styles/styled';

interface ProfileMediaObjectContainerProps {
	hasArrowIcon: boolean;
	picturePlacement: 'right' | 'left';
}

export const ProfileMediaObjectContainer = styled(
	'div'
)<ProfileMediaObjectContainerProps>(
	({ theme, hasArrowIcon, picturePlacement }) => ({
		display: 'flex',
		flexDirection: picturePlacement === 'right' ? 'row-reverse' : 'row',
		gap: hasArrowIcon ? '1rem' : '2.4rem',
		alignItems: 'center',
		fontSize: '1.4rem',
		fontWeight: 400,
		color: theme.palette.grey[1000],
    textAlign: picturePlacement === 'right' ? 'right' : 'left'
	})
);

export const ProfileMediaObjectImage = styled('div')({
	width: '40px',
	height: '40px',
});

export const ProfileMediaObjectContent = styled('div')({});

export const ProfileMediaObjectHeading = styled('div')({
	marginBottom: '0.5rem',
});

export const ProfileMediaObjectDescription = styled('div')({
	fontSize: '1.2rem',
});
