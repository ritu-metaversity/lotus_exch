import { ReactNode } from 'react';
import {
	ListItemContainer,
	ListItemContainerWrapper,
	ListItemIcon,
	ListItemLabel,
} from './Index.styled';
import { useNavigate } from 'react-router-dom';

export interface ListItemProps {
	label: ReactNode;
	icon?: ReactNode;
	hover?: boolean;
	selected?: boolean;
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ListItem = (props: ListItemProps) => {
	const { label, icon, selected, hover, onClick } = props;
	const navigate = useNavigate();

	const handleHomee = () => {
		navigate(`/gameDetail/${icon}`)


	}
	return (
		<ListItemContainerWrapper className='list-item-container' onClick={() => handleHomee()}>
			<ListItemContainer

				onClick={onClick}
				selected={selected}
				hover={hover}
				className='list-item'
			>
				{icon === 77 ?

					<ListItemIcon className='list__icon'><img style={{ width: "22px" }} src={"https://247lordsexch.com/static/media/sideBarHorse.6c8a9ff3.404cbe68857d2d9721462949c4df0f80.svg"} /></ListItemIcon>
					:
					<ListItemIcon className='list__icon'><img style={{ width: "22px" }} src={`https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/${icon === 14 ? 52 : icon}.png`} /></ListItemIcon>
				}
				<ListItemLabel className='list__label'>{label}</ListItemLabel>
			</ListItemContainer>
		</ListItemContainerWrapper>
	);
};

export default ListItem;
