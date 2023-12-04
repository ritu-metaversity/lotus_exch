import { useNavigate } from 'react-router-dom';
import Section from '../../../components/Section/Index';
// import Icon from '../../../components/common/Icon/Index';
import {
	CasinoGamesContainer,
	// CasinoGamesGrid,
	// CasinoGamesImage,
	CasinoSectionContainer,
} from './Index.styled';
import QtechLogooo from "../../../../public/assets/images/qtechlogo.png";
import { CardGamesGrid } from '../IndianCardGamesSection/Index.styled';
import CasinoPointPopup from '../../../components/AllCasino/CasinoPointPopup';
import { Box, Modal } from "@mui/material";
import { useState } from 'react';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};
export const casinoProviderList = [
	{
		name: "EVOLUTION",
		logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/5.png",
		gameCode: "EVO-dhp",
		filterType: "EVO",
	},
	{
		name: "Q Tech",
		logo: QtechLogooo,
		gameCode: "Qtech",
		filterType: "SPB",
	},
	{
		name: "EZUGI",
		logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/1.png",
		gameCode: "EZU-32cards",
		filterType: "EZU",
	},
	// {
	//   name: "BGAMING",
	//   logo: "https://global-uploads.webflow.com/63b2c230b49fa188ad86ffec/63f4c9689497e0d7c32f4a31_BGaming_logo.svg",
	//   gameCode: "Qtech",
	//   filterType: "BGM",
	// },
	{
		name: "SKY WIND",
		logo: "https://skywindgroup.com/assets/site/images/skywind_white.svg",
		gameCode: "SWL-atomroulette",

		filterType: "SWL",
	},
	{
		name: "SA GAMING",
		logo: "https://www.sagaming.com/img/logo.png",
		gameCode: "SAG-lobby",
		filterType: "SAG",
	},
	{
		name: "PRAGMATIC PLAY",
		logo: "https://www.pragmaticplay.com/wp-content/themes/gp-theme-basic/libs/dist/images/PP-white-logo.svg",
		gameCode: "PPL-livecasinolobby",
		filterType: "PPL",
	},
	{
		name: "BETTER LIVE",
		logo: "https://live.beter.co/wp-content/themes/artit/assets/images/logo.svg",
		gameCode: "BTL-lobby",
		filterType: "BTL",
	},
	{
		name: "BET GAMES",
		logo: "https://www.betgames.tv/api/uploads/BG_Logo_White_Horizontal_Lock_Up_dcca475d41.png",
		gameCode: "BTV-lobby",
		filterType: "BTV",
	},
	// {
	//   name: " EBET",
	//   logo: "https://ebet.gg/wp-content/uploads/2022/05/EBET-logo.png",
	//   gameCode: "EBT-sicbo",
	//   filterType: "EBT",
	// },
	{
		name: "AVIATOR",
		logo: "https://sitethemedata.com/casino_icons/fantasy/aviator.png",
		gameCode: "SPB-aviator",
		filterType: "SPB",
	},

	{
		name: "VIVO GAMING",
		logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/21.png",
		gameCode: "VGL-europeanroulette",
		filterType: "VGL",
	},
];

const CasinoGamesSection = () => {
	const navigate = useNavigate();

	// const indianCardGames: Array<string> = [
	// 	'bet-games.png',
	// 	'bingo-games.png',
	// 	'casino-lobby.png',
	// 	'ezugi.png',
	// 	'fishing-games.png',
	// 	'jili.png',
	// 	'live-games.png',
	// 	'super-spade.png',
	// 	'table-games.png',
	// 	'virtual-sports.png',
	// ];
	const [casionId, setCasionId] = useState("")
	const [confirmPopup, setConfirmPopup] = useState(false)

	const handleClose = () => setConfirmPopup(false);

	const handleGameLobby = (vl: any) => {
		if (localStorage.getItem("token")) {

			console.log(vl, "Sdvkhgyuftcgv");
			setConfirmPopup(true)
			setCasionId(vl)
		}
	}
	const handleAgree = () => {
		navigate("/International-Game-play", { state: casionId })

	}
	return (
		<CasinoSectionContainer
			id={'International Casino'.toUpperCase().replace(' ', '_')}
		>
			<Section heading='International Casino' inplay='game'>
				<CasinoGamesContainer>
					<CardGamesGrid>
						{casinoProviderList.map(item => (
							<div
								className='Lottery-Home-Page'
								onClick={() => handleGameLobby(item)}
							>
								<img className='Lottery-Home-Page-img' src={item?.logo} />
								<span
									style={{
										fontSize: '14px',
										fontWeight: '700',
									}}
								>
									{item?.name}
								</span>
							</div>
						))}
					</CardGamesGrid>
				</CasinoGamesContainer>
			</Section>
			<Modal
				className="modal_style"
				open={confirmPopup}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<CasinoPointPopup handleClose={handleClose} type={"qtech"} />
					<button onClick={handleAgree} className='slotsCasino-pop-up__content-button'>OK, I AGREE !</button>

				</Box>
			</Modal>
		</CasinoSectionContainer>
	);
};

export default CasinoGamesSection;
