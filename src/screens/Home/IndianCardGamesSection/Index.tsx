import Section from '../../../components/Section/Index';
import Icon from '../../../components/common/Icon/Index';
import {
	CardGamesContainer,
	CardGamesGrid,
	CardGamesImage,
	CardSectionContainer,
} from './Index.styled';

const IndianCardGamesSection = () => {
	const indianCardGames: Array<string> = [
		'2-card-teen-patti.png',
		'20-20-poker.jpg',
		'32-cards-virtual.jpg',
		'32-cards.jpg',
		'6-player-poker.jpg',
		'7up7down-virtual.jpg',
		'7up7down.jpg',
		'Baccarat.png',
		'aaa-virtual.jpg',
		'aaa.jpg',
		'andar-bahar-virtual.jpg',
		'andarbahar.jpg',
		'bollywood.jpg',
		'casino-meter.png',
		'casino-war.png',
		'dragon-tiger.jpg',
		'hi-low-virtual.jpg',
		'hi-low.jpg',
		'live-teen-patti.jpg',
		'matka-virtual.jpg',
		'matka.jpg',
		'muflis-teenpatti.png',
		'poker-virtual.jpg',
		'poker.jpg',
		'hi-low.jpg',
		'queen-race.png',
		'race-20-20.png',
		'roullete-virtual.jpg',
		'roullete.jpg',
		'sicbo.png',
		'teenpatti-t20-virtual.jpg',
		'teenpatti-t20.jpg',
		'teenpatti-test.png',
		'teenpatti-virtual.jpg',
		'trap.png',
		'trio.png',
	];

	return (
		<CardSectionContainer>
			<Section
				heading='Indian Card Games'
				icon={<Icon src='/assets/icons/ace.svg#ace' isSvgIcon />}
			>
				<CardGamesContainer>
					<CardGamesGrid>

						{indianCardGames.map((game, idx) => (
							<CardGamesImage
								key={idx}
								src={`/assets/images/indianCardGames/${game}`}
								alt=''
							/>
						))}

					</CardGamesGrid>
				</CardGamesContainer>
			</Section>
		</CardSectionContainer>
	);
};

export default IndianCardGamesSection;
