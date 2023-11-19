import { ListContainer } from './Index.styled';
import ListItem, { ListItemProps } from './ListItem/Index';
import "./Mobile.list.css"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLeftMenuDataOpenMutation } from '../../../state/apis/main/apiSlice';

interface ListProps {
	items: Array<ListItemProps>;
	hover?: boolean;
	activeItem?: number;
	onListItemClick?: (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: number
	) => void;
	closeLefySideBar: any
}

const List = ({ activeItem, hover, closeLefySideBar }: ListProps) => {
	const navigate = useNavigate();
	const [triger, { data: leftMenuData }] = useLeftMenuDataOpenMutation()

	useEffect(() => {
		triger({})
	}, [])
	const handleGamePage = (vl: any) => {
		console.log(vl, "sdfsdkfbsdj")
		closeLefySideBar(false)
		navigate(`/gameDetail/${vl?.sportId}`, { state: vl?.sportName })

	}
	console.log(leftMenuData?.data, "fdvfddfgdvwerf");

	return (
		<ListContainer className='list'>
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
