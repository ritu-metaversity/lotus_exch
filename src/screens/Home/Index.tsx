import { HomeContainer } from './Index.styled';
import Carousel from './Carousel/Index';
import SportsButtons from './SportsButtons/Index';
import InPlaySection from './InPlaySection/Index';
import SportsFeaturette from './SportsFeaturette/Index';
import PopularGamesSection from './PopularGamesSection/Index';
import IndianCardGamesSection from './IndianCardGamesSection/Index';
import CasinoGamesSection from './CasinoGamesSection/Index';

import Footer from '../../components/Footer/Index';
import { useEffect, useState } from 'react';
import UpcommingEvents from './InPlaySection/UpcommingEvents';
import axios from 'axios';

const Home = () => {
	const [rightSidebarExpanded] = useState(false);
	const token = localStorage.getItem("token");
	const [gameQtech, setGameQTech] = useState<any>()
	const [gameAura, setGameAura] = useState<any>()
	const [gameSuperNova, setGameSuperNova] = useState<any>()
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
			})

	}, [])
	console.log(gameQtech, "sdfasjuihybhjnj")
	return (
		<HomeContainer>
			<Carousel />
			<SportsButtons />
			<SportsFeaturette />
			<InPlaySection />
			{gameQtech?.active === true ?
				<>
					<CasinoGamesSection />
					<PopularGamesSection />
					<IndianCardGamesSection />
				</>
				: ""}

			{token ?
				"" :

				<>
					<CasinoGamesSection />
					<PopularGamesSection />
					<IndianCardGamesSection />
				</>}

			<UpcommingEvents />

			{
				window.location.pathname === "/home" && window.innerWidth < 1024 ?
					<div style={{ padding: "25px 0px 0px" }}>

						<Footer expanded={rightSidebarExpanded} />
					</div>
					:
					""
			}
		</HomeContainer>
	);
};

export default Home;
