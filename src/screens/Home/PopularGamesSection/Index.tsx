import { useNavigate } from 'react-router-dom';
import Section from '../../../components/Section/Index';
// import Icon from '../../../components/common/Icon/Index';
import {
	GameImage,
	PopularGamesContainer,
	PopularGamesGrid,
	PopularGamesSectionContainer,
} from './Index.styled';
export const FantasyGamedata = [
	{
		name: "Aviator",
		logo: "https://sitethemedata.com/casino_icons/fantasy/aviator.png",
		filterType: "SPB",
	},
	{
		name: "Relex",
		logo: "https://cf-cdn.relax-gaming.com/static/img/logo.svg",
		filterType: "RLX",
	},
	{
		name: "Thunder Kick",
		logo: "https://www.thunderkick.com/wp-content/uploads/2021/04/thunderkick-logo-horizontal-white.svg",
		filterType: "TK",
	},
	{
		name: "Nolimit City",
		logo: "https://www.nolimitcity.com/img/site-img/nolimit-city.png",
		filterType: "NLC",
	},
];
const IndianCardGamesSection = () => {
	const navigate = useNavigate();


	const handleGameFastasy = (game: any) => {
		navigate("/Fantasy-Game-List", { state: game })
	}
	return (
		<PopularGamesSectionContainer>
			<Section
				heading='Fantasy Game'

			>
				<PopularGamesContainer>
					<PopularGamesGrid>

						{FantasyGamedata.map((game) => (
							<div style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
								width: "179px",
								backgroundColor: "#0000003b",
								height: "109px",
								borderRadius: "10px"
							}} onClick={() => handleGameFastasy(game)}>
								<GameImage
									src={game?.logo}
								/>
								<span style={{
									fontSize: "14px",
									fontWeight: "700"
								}}>{game?.name}</span>
							</div>
						))}
					</PopularGamesGrid>
				</PopularGamesContainer>
			</Section>
		</PopularGamesSectionContainer >
	);
};

export default IndianCardGamesSection;
