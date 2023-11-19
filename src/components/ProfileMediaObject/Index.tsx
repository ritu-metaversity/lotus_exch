import Avatar from '@mui/material/Avatar';
import ArrowDown from '@mui/icons-material/KeyboardArrowDown';
import {
	ProfileMediaObjectContainer,
	ProfileMediaObjectImage,
	ProfileMediaObjectContent,
	ProfileMediaObjectHeading,
	ProfileMediaObjectDescription,
} from './Index.styled';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectUser } from '../../state/features/auth/authSlice';

interface ProfileMediaObjectProps {
	hoverAble?: boolean;
	picturePlacement?: 'right' | 'left';
}

const ProfileMediaObject = (props: ProfileMediaObjectProps) => {
	const { hoverAble = false, picturePlacement = 'left' } = props;
	const user = useAppSelector(selectUser);

	if (!user) return null;

	return (
		<ProfileMediaObjectContainer
			className='profile-media'
			hasArrowIcon={hoverAble}
			picturePlacement={picturePlacement}
		>
			<ProfileMediaObjectImage>
				<Avatar src='/assets/images/default-user.png' />
			</ProfileMediaObjectImage>

			{hoverAble && <ArrowDown />}

			<ProfileMediaObjectContent>
				<ProfileMediaObjectHeading>{user.username}</ProfileMediaObjectHeading>
				<ProfileMediaObjectDescription>
					{user.userId}
				</ProfileMediaObjectDescription>
			</ProfileMediaObjectContent>
		</ProfileMediaObjectContainer>
	);
};

export default ProfileMediaObject;
