import { useNavigate } from 'react-router-dom';
import Section from '../../../components/Section/Index';
// import Icon from '../../../components/common/Icon/Index';
// import { GameImage } from '../PopularGamesSection/Index.styled';
import {
	CardGamesContainer,
	CardGamesGrid,
	CardSectionContainer,
} from './Index.styled';
import "./LotteryGameList.css"

export const lotteryprovidersList = [
	{
		name: "BET GAMES",
		logo: "https://www.betgames.tv/api/uploads/BG_Logo_White_Horizontal_Lock_Up_dcca475d41.png",
		filterType: "BTV",
	},
	{
		name: "EVOLUTION",
		logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/5.png",
		filterType: "EVO",
	},
	{
		name: "EVOPLAY",
		logo: "https://evoplay.games/wp-content/themes/evoplay/assets/img/logo.svg",
		filterType: "EVP",
	},
	{
		name: "GALAXSYS",
		logo: "https://galaxsys.co/wp-content/uploads/2022/02/Galaxsys.svg",
		filterType: "GLX",
	},
	{
		name: "PLAY GO",
		logo: "https://static.wixstatic.com/media/dad1c6_ef8a09e283c54aa9863a02228afb9852~mv2.png/v1/fill/w_272,h_74,al_c,q_95,enc_auto/playngo_logo_on_black.png",
		filterType: "PNG",
	},
	{
		name: "S4",
		logo: "https://media.licdn.com/dms/image/C4E0BAQGMnMvRWUcOsA/company-logo_200_200/0/1519900555706?e=1703116800&v=beta&t=ezkTp_NYg2wcB5L2JADuOxm2SyH77pKxl6aYnJ0Vuzs",
		filterType: "S4G",
	},
	{
		name: "SPEARHEAD",
		logo: "https://spearheadstudios.com/wp-content/themes/spearheadstudios/assets/img/logo.svg?v=1",
		filterType: "SHS",
	},
	{
		name: "SPRIBE",
		logo: "https://spribe.co/spribe-logo.b13289b5f5fab437.svg",
		filterType: "SPB",
	},
	{
		name: "TRIPLE",
		logo: "https://www.triple-pg.com/wp-content/uploads/2023/05/logo-wh.svg",
		filterType: "TPG",
	},
	{
		name: "KIRON",
		logo: "https://kironinteractive.com/wp-content/uploads/2022/03/Kiron-Logo-Flat-white.png",
		filterType: "KIR",
	},
	{
		name: "TURBO",
		logo: "https://turbogames.io/images/home/home-logo.png",
		filterType: "TRB",
	},
	// {
	//   logo: "https://wazdan.com/wp-content/themes/wazdan/assets/images/logo.svg",
	//   name: "WAZDAN",
	//   filterType: "WAZ",
	// },
];

const IndianCardGamesSection = () => {

	const navigate = useNavigate();
	const handleGameFastasy = (game: any) => {

		navigate("/Lottery-Game-List", { state: game })
	}

	return (
		<CardSectionContainer id={'Lottery Games'.toUpperCase().replace(' ', '_')}>
			<Section
				heading='Lottery Games'
				inplay='game'
			// icon={<Icon src='/assets/icons/ace.svg#ace' isSvgIcon />}
			>
				<CardGamesContainer>
					<CardGamesGrid>
						{lotteryprovidersList.map(game => (
							<div
								className='Lottery-Home-Page'
								onClick={() => handleGameFastasy(game)}
							>
								<img className='Lottery-Home-Page-img' src={game?.logo} />
								<span
									style={{
										fontSize: '14px',
										fontWeight: '700',
									}}
								>
									{game?.name}
								</span>
							</div>
						))}
					</CardGamesGrid>
				</CardGamesContainer>
			</Section>
		</CardSectionContainer>
	);
};

export default IndianCardGamesSection;
