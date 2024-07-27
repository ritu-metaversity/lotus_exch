import { HomeContainer } from './Index.styled';
import Carousel from './Carousel/Index';
import InPlaySection from './InPlaySection/Index';
import { useState } from 'react';
import UpcommingEvents from './InPlaySection/UpcommingEvents';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAllotedCasinoQuery } from '../../state/apis/main/apiSlice';
import { selectIsLoggedIn } from '../../state/features/auth/authSlice';

const Home = () => {
	const [rightSidebarExpanded] = useState(false);
	const isLoggedIn = useAppSelector(selectIsLoggedIn);
	const { data } = useAllotedCasinoQuery(undefined, {
		skip: !isLoggedIn,
	});
	return (
		<HomeContainer>
			<Carousel />
			<InPlaySection />
			<UpcommingEvents />
		</HomeContainer>
	);
};

export default Home;
