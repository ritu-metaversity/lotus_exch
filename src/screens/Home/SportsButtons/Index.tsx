import { useEffect } from 'react';
import { SportsButtonsContainer } from './Index.styled';
import SportsButton from './SportsButton';
import { useLeftMenuDataOpenMutation } from '../../../state/apis/main/apiSlice';

const SportsPromotion = () => {

	// const sportsButtons: Array<ComponentProps<typeof SportsButton>> = [
	// 	{
	// 		background: '/assets/images/sportsButton/cricket-bg.png',
	// 		icon: <Icon isSvgIcon src={`${baseIconPath}/cricket-ball.svg#cricket`} />,
	// 		title: 'Cricket',
	// 	},
	// 	{
	// 		background: '/assets/images/sportsButton/football-bg.png',
	// 		icon: <Icon isSvgIcon src={`${baseIconPath}/football.svg#football`} />,
	// 		title: 'Football',
	// 	},
	// 	{
	// 		background: '/assets/images/sportsButton/tennis-bg.png',
	// 		icon: <Icon isSvgIcon src={`${baseIconPath}/tennis.svg#tennis`} />,
	// 		title: 'Tennis',
	// 	},
	// 	{
	// 		background: '/assets/images/sportsButton/horse-bg.png',
	// 		icon: <Icon isSvgIcon src={`${baseIconPath}/horse.svg#horse`} />,
	// 		title: 'Horse Racing',
	// 	},
	// 	{
	// 		background: '/assets/images/sportsButton/greyhound-bg.png',
	// 		icon: <Icon isSvgIcon src={`${baseIconPath}/greyhound.svg#greyhound`} />,
	// 		title: 'Greyhound Racing',
	// 	},
	// ];

	const [triger, { data: leftMenuData }] = useLeftMenuDataOpenMutation()

	useEffect(() => {
		triger({})
	}, [])
	console.log(leftMenuData?.data, "adasdasdasdas");

	return (
		<SportsButtonsContainer>
			{leftMenuData?.data.map((item: any) => (
				<SportsButton menuuuu={item} />

			))}

		</SportsButtonsContainer>
	);
};

export default SportsPromotion;
