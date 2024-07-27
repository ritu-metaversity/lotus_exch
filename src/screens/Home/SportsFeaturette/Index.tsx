import { ComponentProps, useEffect, useState } from 'react';
import FeaturedSports from '../../../components/FeaturedSports/Index';
import {
	SportsFeaturetteContainer,
	SportsFeaturetteGrid,
} from './Index.styled';
import Icon from '../../../components/common/Icon/Index';
import axios from 'axios';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAllotedCasinoQuery } from '../../../state/apis/main/apiSlice';
import { selectIsLoggedIn } from '../../../state/features/auth/authSlice';

const SportsFeaturette = () => {
	const baseIconPath = '/assets/icons/featuredSports';
	const baseBgPath = '/assets/images/featuredSports';
	const [casinoListData, setCasinoListData] = useState<any>({});
	const isLoggedIn = useAppSelector(selectIsLoggedIn);
	const { data } = useAllotedCasinoQuery(undefined, {
		skip: !isLoggedIn,
	});
	// const [casinoListName, setCasinoListName] = useState();
	// const [casinoListImg, setCasinoListImg] = useState();

	//console.log(casinoListData.code, 'casinoListData');

	const featuredSports: Array<ComponentProps<typeof FeaturedSports>> = [
		{
			icon: <Icon src={`${baseIconPath}/blastoff.svg#blastoff`} isSvgIcon />,
			name: 'Aviator',
			background: `${baseBgPath}/aviator.jpeg`,
			route: '/Game-play',
			gameCode: 'SPB-aviator',
			filterType: 'SPB',
			type: 'qtech',
			show: !isLoggedIn || data?.QTech?.active,
		},
		{
			icon: (
				<Icon src={`${baseIconPath}/sportsbook.svg#sportsbook`} isSvgIcon />
			),
			name: 'Sportsbook',
			background: `${baseBgPath}/sportsbook.png`,

			route: localStorage.getItem('token') ? '/Sports_book' : '',
			gameCode: casinoListData.code,
			filterType: casinoListData?.providerCode,
			type: 'qtech',
			show: !isLoggedIn || data?.SportBook?.active,
		},
		{
			icon: <Icon src={`${baseIconPath}/ecricket.svg#ecricket`} isSvgIcon />,
			name: 'E-Cricket',
			background: `${baseBgPath}/ecricket.png`,
			route: '',
			gameCode: 'SPB-aviator',
			filterType: 'SPB',
			type: 'qtech',
			show: !isLoggedIn || data?.QTech?.active,
		},
		{
			icon: <Icon src={`${baseIconPath}/slot.png`} />,
			name: 'Slot',
			background: `${baseBgPath}/slot.png`,
			route: '/Slot-Games',
			gameCode: 'SPB-aviator',
			filterType: 'SPB',
			type: 'qtech',
			show: !isLoggedIn || data?.QTech?.active,
		},
		{
			icon: <Icon src={`${baseIconPath}/fishing.png`} />,
			name: 'Fishing Games',
			background: `${baseBgPath}/fishing.png`,
			route: '/live-casino',
			gameCode: 'FishingGames',
			filterType: 'SPB',
			type: 'qtech',
			show: !isLoggedIn || data?.QTech?.active,
		},
		{
			icon: <Icon src={`${baseIconPath}/evolution.svg#evolution`} isSvgIcon />,
			name: 'Evolution',
			background: `${baseBgPath}/evolution.svg`,
			route: '/Game-play',
			gameCode: 'EVO-dhp',
			filterType: 'EVO',
			type: 'qtech',
			show: !isLoggedIn || data?.QTech?.active,
		},
		{
			icon: <Icon src={`${baseIconPath}/casino.svg#casino`} />,
			name: 'Live Casino',
			background: `${baseBgPath}/casino.png`,
			route: '/live-casino',
			gameCode: 'LiveCasino',
			filterType: 'SPB',
			type: 'live',
			show: !isLoggedIn || data?.Aura?.active || data?.['Super Nova']?.active,
		},
		{
			icon: <Icon src={`${baseIconPath}/casino.svg#casino`} />,
			name: 'International Casino',
			background: `${baseBgPath}/casino.png`,
			route: '/Internationl-casino',
			gameCode: 'LiveCasino',
			filterType: 'SPB',
			type: 'qtech',
			show: !isLoggedIn || data?.QTech?.active,
		},
		{
			icon: <Icon src={`${baseIconPath}/card.png`} />,
			name: 'Card Games',
			background: `${baseBgPath}/card.png`,
			route: '/Card-Game',
			gameCode: 'CardGame',
			filterType: 'SPB',
			type: 'qtech',
			show: !isLoggedIn || data?.QTech?.active,
		},
		{
			icon: <Icon src={`${baseIconPath}/multiplayer.png`} />,
			name: 'Multiplayer Games',
			background: `${baseBgPath}/multiplayer.png`,
			route: '/live-casino',
			gameCode: 'multiplayerGame',
			filterType: 'SPB',
			type: 'qtech',
			show: !isLoggedIn || data?.Aura?.active || data?.['Super Nova']?.active,
		},
	];

	useEffect(() => {
		const TokenId = localStorage.getItem('token');
		if (localStorage.getItem('token')) {
			axios
				.post(
					'https://api.247365.exchange/admin-new-apis/api/supernowa/game-list',
					{ providerCode: 'BT' },

					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${TokenId}`,
						},
					}
				)
				.then(response => {
					if (response) {
						setCasinoListData(response?.data?.data?.games[0]);
						//   setCasinoListName(response?.data?.data?.games[0]?.name)
						//   setCasinoListImg(response?.data?.data?.games[0]?.thumb)
					} else {
					}
				});
		}
	}, []);
	console.log(featuredSports, 'huihui2');

	// {/* {gameQtech?.active === true && ["Slot Games", "Lottery", "Fantasy Games", "Internation Casino"].includes(key) */}
	return (
		<SportsFeaturetteContainer>
			<SportsFeaturetteGrid>
				{featuredSports.map(
					sports => sports.show && <FeaturedSports {...sports} />
				)}
			</SportsFeaturetteGrid>
		</SportsFeaturetteContainer>
	);
};

export default SportsFeaturette;
