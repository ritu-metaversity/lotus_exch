import { ListContainer } from './Index.styled';
import ListItem, { ListItemProps } from './ListItem/Index';
import "./Mobile.list.css"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLeftMenuDataOpenMutation } from '../../../state/apis/main/apiSlice';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { ListItemContainer, ListItemContainerWrapper, ListItemLabel, ListItemLabelsdsdfsdfsd } from './ListItem/Index.styled';
// import { ListItemIcon } from '@mui/material';
// import { ListItemIcon } from '@mui/material';


interface ListProps {
	items: Array<ListItemProps>;
	hover?: boolean;
	activeItem?: number;
	onListItemClick?: (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: number
	) => void;
	closeLefySideBar: any
	onClick?: () => void;

}

const List = ({ activeItem, hover, closeLefySideBar }: ListProps) => {
	const navigate = useNavigate();
	const [triger, { data: leftMenuData }] = useLeftMenuDataOpenMutation()
	const liveCasino = [
		{
			label: 'Live Casino',
			link: '/live-casino',
			highlighted: true,
			logo: 'https://11bet24.com/indian-casino.png',

		},
		{
			label: 'Intl. Casino',
			link: '/Internationl-casino',
			logo: 'https://11bet24.com/international-casinoletest.png',
			highlighted: true,
		},
		{
			label: 'Fantasy Games',
			link: '/home',
			logo: 'https://11bet24.com/fantasy-game.png',
			onClick: () => handleClick('Fantasy Games'),


			highlighted: true,
		},
		{
			label: 'Slots Games',
			link: '/Slot-Games',
			highlighted: true,
			logo: 'https://11bet24.com/slots.png',

		},
		{
			label: 'Lottery Games',
			link: '/home',
			highlighted: true,
			logo: 'https://11bet24.com/lottery.png',
			onClick: () => handleClick('Lottery Games'),


		},
	];
	const handleClick = (id: string) => {
		document
			.getElementById(id.toUpperCase().replace(' ', '_'))
			?.scrollIntoView();
	};
	useEffect(() => {
		triger({})
	}, [])
	const handleGamePage = (vl: any) => {
		closeLefySideBar(false)
		navigate(`/gameDetail/${vl?.sportId}`, { state: vl?.sportName })
	}

	const handleGameMyMarketPage = () => {
		closeLefySideBar(false)
		navigate("/My-Market")
	}
	const handleHomee = (vl: any) => {
		console.log(vl, "ytresdfxc");
		closeLefySideBar(false)

		navigate(vl?.link)
	}
	return (
		<ListContainer className='list'>
			<ListItemContainerWrapper className='list-item-container' onClick={handleGameMyMarketPage}>
				<ListItemContainer
					hover={hover}
					className='list-item'
				>
					<RemoveRedEyeIcon style={{
						fontSize: "20px",
						color: "black"
					}} />
					<ListItemLabel className='list__label'>My Market</ListItemLabel>
				</ListItemContainer>
			</ListItemContainerWrapper>
			{leftMenuData?.data && leftMenuData?.data.map((item: any, i: any) => (
				<ListItem
					onClick={() => handleGamePage(item)}
					key={i}
					selected={i === activeItem}
					hover={hover}
					icon={item?.sportId}
					label={item.sportName}
				/>
			))}
			{liveCasino && liveCasino.map((item: any) => (
				<ListItemContainerWrapper className='list-item-container' onClick={() => handleHomee(item)}>
					<ListItemContainer

						hover={hover}
						className='list-item'
					>

						<ListItemLabelsdsdfsdfsd className='list__label'><img style={{ width: "22px" }} src={item?.logo} /><span>{item?.label}</span></ListItemLabelsdsdfsdfsd>
					</ListItemContainer>
				</ListItemContainerWrapper>
			))}

			<div className="socials">
				<span className="left-side-menu-item__label_Whatsapp sc-ion-label-md-h sc-ion-label-md-s md hydrated">
					Get Instant ID on whatsapp
				</span>
				<a href="" target="_blank">
					<div className="whatsapp-button" />
				</a>
				<a href="https://instagram.com" target="_blank">
					<div className="instagram-button" />
				</a>
				<a href="https://telegram.me" target="_blank">
					<div className="telegram-button" />
				</a>
				<a href="" target="_blank">
					<div className="whatsapp-care-button" />
				</a>
			</div>

		</ListContainer>
	);
};

export default List;
