import { useEffect } from 'react';
import List from '../common/List/Index';
import { ListItemProps } from '../common/List/ListItem/Index';
import { SidebarContainerDesktop } from './Index.styled';
import Icon from '../common/Icon/Index';
import { useLeftMenuDataOpenMutation } from '../../state/apis/main/apiSlice';


// interface SidebarProps {
// 	expanded: boolean;
// 	setSidebarExpanded: Dispatch<SetStateAction<boolean>>;
// }

export const sideBarItems: Array<ListItemProps> = [
	{
		icon: <Icon src='/assets/icons/sidebar/star.svg#star' isSvgIcon />,
		label: 'Favourite',
		hover: true,
	},
	{
		icon: <Icon src='/assets/icons/sidebar/cricket.svg#cricket' isSvgIcon />,
		label: 'Cricket',
	},
	{
		icon: (
			<Icon src='/assets/icons/sidebar/football.svg#football' isSvgIcon />
		),
		label: 'Football',
	},
	{
		icon: <Icon src='/assets/icons/sidebar/tennis.svg#tennis' isSvgIcon />,
		label: 'Tennis',
	},
	{
		icon: <Icon src='/assets/icons/sidebar/horse.svg#horse' isSvgIcon />,
		label: 'Horse Racing',
	},
	{
		icon: (
			<Icon src='/assets/icons/sidebar/greyhound.svg#greyhound' isSvgIcon />
		),
		label: 'Greyhound Racing',
	},
	{
		icon: <Icon src='/assets/icons/sidebar/ace.svg#ace' isSvgIcon />,
		label: 'Indian Card Games',
	},
	{
		icon: <Icon src='/assets/icons/sidebar/trophy.svg#trophy' isSvgIcon />,
		label: 'Sportsbook',
	},
	{
		icon: (
			<Icon
				src='/assets/icons/sidebar/live-casino.svg#live-casino'
				isSvgIcon
			/>
		),
		label: 'Casino',
	},
	{
		icon: <Icon src='/assets/icons/sidebar/dice.svg#dice' isSvgIcon />,
		label: 'Slots Games',
	},
];
const SidebaDeskTop = () => {
	// const [upperHeader, setUpperHeader] = useState([])
	const [triger, { data: leftMenuData }] = useLeftMenuDataOpenMutation()

	useEffect(() => {
		triger({})
	}, [])
	console.log(leftMenuData?.data, "datadatadata");

	const onListItemClick = (vl: any) => {
		console.log(vl, "sdfjsdfkjsnd");
	}

	return (
		<SidebarContainerDesktop
		>
			<List closeLefySideBar={() => { }} hover items={leftMenuData?.data} onListItemClick={onListItemClick} />
		</SidebarContainerDesktop>
	);
};

export default SidebaDeskTop;
