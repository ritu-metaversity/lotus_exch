import { Link } from 'react-router-dom';
import {
	SecondaryNavbarContainer,
	SecondaryNavbarItem,
	SecondaryNavbarList,
} from './Index.styled';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import { useLeftMenuDataOpenMutation } from '../../state/apis/main/apiSlice';
import axios from 'axios';

interface NavItem {
	label: string;
	link: string;
	highlighted?: boolean;
	onClick?: () => void;
}

const SecondaryNavbar = () => {



	// const SportsBook: Array<NavItem> = [
	// 	{
	// 		label: 'SportsBook',
	// 		link: localStorage.getItem('token') ? '/Sports_book' : '',
	// 		highlighted: true,
	// 	},
	// ];

	const liveCasino: Array<NavItem> = [
		{
			label: 'Live Casino',
			link: '/live-casino',
			highlighted: true,
		}
	]
	const interNationalCasino: Array<NavItem> = [
		{
			label: 'International Casino',
			link: '/Internationl-casino',
			highlighted: true,
		},
		{
			label: 'Fantasy Games',
			link: '/home',
			onClick: () => handleClick('Fantasy Games'),
			highlighted: true,
		},
		{
			label: 'Slots Games',
			link: '/Slot-Games',
			highlighted: true,
		},
		{
			label: 'Lottery Games',
			link: '/home',
			onClick: () => handleClick('Lottery Games'),

			highlighted: true,
		},
	];
	// useEffect(() => {
	// 	axios
	// 		.post("https://api.247365.exchange/admin-new-apis/enduser/left-menu-data-open")
	// 		.then((res: any) => {

	// 			setUpperHeader(res?.data?.data);
	// 			//   setIsloading(false)
	// 		});
	// }, []);
	const [triger, { data: leftMenuData }] = useLeftMenuDataOpenMutation();
	const handleClick = (id: string) => {
		document
			.getElementById(id.toUpperCase().replace(' ', '_'))
			?.scrollIntoView();
	};
	useEffect(() => {
		triger({});
	}, []);
	console.log(leftMenuData, 'leftMenuData');

	// https://api.247365.exchange/admin-new-apis/enduser/left-menu-data-open
	const token = localStorage.getItem("token");
	const [gameQtech, setGameQTech] = useState<any>()
	const [gameAura, setGameAura] = useState<any>()
	const [gameSuperNova, setGameSuperNova] = useState<any>()
	const [gameSportBook, setGameSportBook] = useState<any>()
	useEffect(() => {

		axios.post(
			"https://api.247365.exchange/admin-new-apis/user/alloted-casino-list", {},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		)
			.then((response: any) => {
				setGameQTech(response?.data?.data.find((item: any) => item?.name === "QTech"))
				setGameAura(response?.data?.data.find((item: any) => item?.name === "Aura"))
				setGameSuperNova(response?.data?.data.find((item: any) => item?.name === "Super Nova"))
				setGameSportBook(response?.data?.data.find((item: any) => item?.name === "SportBook"))
			})

	}, [])
	return (
		<SecondaryNavbarContainer>
			<SecondaryNavbarList>
				{/* {gameSportBook?.active === true ?
					SportsBook.map(navItem => (
						<SecondaryNavbarItem
							highlighted={navItem.highlighted}
							key={navItem.label}
						>
							<Link to={navItem.link}>{navItem.label}</Link>
						</SecondaryNavbarItem>
					)) : ""} */}

				{leftMenuData?.data.map((navItem: any) => (
					<SecondaryNavbarItem
						// highlighted={navItem.highlighted}
						key={navItem.sportName}
					>
						<>
							<Link to={`/gameDetail/${navItem.sportId}`}>
								{navItem.sportName}
							</Link>
						</>
					</SecondaryNavbarItem>
				))}
				{gameAura?.active === true ?

					(liveCasino.map(navItem => (
						<SecondaryNavbarItem
							onClick={navItem.onClick}
							highlighted={navItem.highlighted}
							key={navItem.label}
						>
							<Link to={navItem.link}>{navItem.label}</Link>
						</SecondaryNavbarItem>
					)))
					: gameSuperNova?.active === true ?

						(liveCasino.map(navItem => (
							<SecondaryNavbarItem
								onClick={navItem.onClick}
								highlighted={navItem.highlighted}
								key={navItem.label}
							>
								<Link to={navItem.link}>{navItem.label}</Link>
							</SecondaryNavbarItem>
						))) : ""}



				{gameQtech?.active === true ?
					interNationalCasino.map(navItem => (
						<SecondaryNavbarItem
							onClick={navItem.onClick}
							highlighted={navItem.highlighted}
							key={navItem.label}
						>
							<Link to={navItem.link}>{navItem.label}</Link>
						</SecondaryNavbarItem>
					))

					: ""
				}
			</SecondaryNavbarList>
		</SecondaryNavbarContainer>
	);
};

export default SecondaryNavbar;
