import Section from '../../../components/Section/Index';
import Icon from '../../../components/common/Icon/Index';
import {
	GameImage,
	PopularGamesContainer,
	PopularGamesGrid,
	PopularGamesSectionContainer,
} from './Index.styled';

const IndianCardGamesSection = () => {
	const gameImages: Array<string> = [
		'mega-fishing.png',
		'coin-toss.png',
		'7up7down.png',
		'roulette.png',
		'rummy.png',
		'teen-patti.png',
		'dragon-tiger.png',
		'minesweeper.png',
	];

	return (
		<PopularGamesSectionContainer>
			<Section
				heading='Popular Games'
				icon={<Icon src='/assets/icons/ace.svg#ace' isSvgIcon />}
			>
				<PopularGamesContainer>
					<PopularGamesGrid>
						{gameImages.map((game, idx) => (
							<GameImage
								key={idx}
								src={`/assets/images/popularGames/${game}`}
							/>
						))}
					</PopularGamesGrid>
				</PopularGamesContainer>
			</Section>
		</PopularGamesSectionContainer>
	);
};

export default IndianCardGamesSection;
