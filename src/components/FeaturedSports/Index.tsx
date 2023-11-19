import { ReactNode } from 'react';
import {
	FeaturedSportsContainer,
	FeaturesSportsName,
} from './Index.styled';

import { useNavigate } from "react-router-dom";

interface FeaturesSportsProps {
	name: ReactNode;
	background: string;
	icon: ReactNode;
	route: string;
	gameCode: string;
	filterType: string;
}

const FeaturedSports = (props: FeaturesSportsProps) => {
	const { icon, name, background, route } = props;
	const navigate = useNavigate();

	const handleRouter = () => {

		let data = {
			name: props?.name,
			gameCode: props?.gameCode,
			filterType: props?.filterType,
		}
		navigate(route, { state: data })
	}
	return (
		<FeaturedSportsContainer
			bgImage={background}
			className='featured-sports-container'
			onClick={handleRouter}
		>
			<FeaturesSportsName>
				{icon}
				<span>{name}</span>
			</FeaturesSportsName>
		</FeaturedSportsContainer>
	);
};

export default FeaturedSports;
