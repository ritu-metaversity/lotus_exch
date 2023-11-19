import { Link } from 'react-router-dom';
import {
	SecondaryNavbarContainer,
	SecondaryNavbarItem,
	SecondaryNavbarList,
} from './Index.styled';
import { useEffect } from 'react';
// import axios from 'axios';
import { useLeftMenuDataOpenMutation } from '../../state/apis/main/apiSlice';

interface NavItem {
	label: string;
	link: string;
	highlighted?: boolean;
}

const SecondaryNavbar = () => {

	const SportsBook: Array<NavItem> = [
		{
			label: 'SportsBook',
			link: '/',
			highlighted: true,
		}
	];
	const liveCasino: Array<NavItem> = [
		{
			label: 'Live Casino',
			link: '/',
			highlighted: true,
		},
		{
			label: 'Slots Games',
			link: '/',
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
	const [triger, { data: leftMenuData }] = useLeftMenuDataOpenMutation()

	useEffect(() => {
		triger({})
	}, [])
	console.log(leftMenuData, "leftMenuData");

	// https://api.247365.exchange/admin-new-apis/enduser/left-menu-data-open


	return (
		<SecondaryNavbarContainer>
			<SecondaryNavbarList>
				{SportsBook.map((navItem) => (
					<SecondaryNavbarItem
						highlighted={navItem.highlighted}
						key={navItem.label}
					>
						<Link to={navItem.link}>{navItem.label}</Link>
					</SecondaryNavbarItem>
				))}
				{leftMenuData?.data.map((navItem: any) => (
					<SecondaryNavbarItem
						// highlighted={navItem.highlighted}
						key={navItem.sportName}
					>
						<>
							<Link to={`/gameDetail/${navItem.sportId}`}>{navItem.sportName}</Link>
						</>
					</SecondaryNavbarItem>
				))}
				{liveCasino.map((navItem) => (
					<SecondaryNavbarItem
						highlighted={navItem.highlighted}
						key={navItem.label}
					>
						<Link to={navItem.link}>{navItem.label}</Link>
					</SecondaryNavbarItem>
				))}
			</SecondaryNavbarList>
		</SecondaryNavbarContainer>
	);
};

export default SecondaryNavbar;
