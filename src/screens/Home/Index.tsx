import { HomeContainer } from './Index.styled';
import Carousel from './Carousel/Index';
import SportsButtons from './SportsButtons/Index';
import InPlaySection from './InPlaySection/Index';
import SportsFeaturette from './SportsFeaturette/Index';
import PopularGamesSection from './PopularGamesSection/Index';
import IndianCardGamesSection from './IndianCardGamesSection/Index';
import CasinoGamesSection from './CasinoGamesSection/Index';

import Footer from '../../components/Footer/Index';
import { useState } from 'react';
import UpcommingEvents from './InPlaySection/UpcommingEvents';

const Home = () => {
	const [rightSidebarExpanded] = useState(false);

	return (
		<HomeContainer>
			<Carousel />
			<SportsButtons />
			<SportsFeaturette />
			<InPlaySection />
			<CasinoGamesSection />
			<PopularGamesSection />
			<IndianCardGamesSection />
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
