import {
	GameCardBody,
	GameCardContainer,
	GameCardDescription,
	GameCardImage,
	GameCardTitle,
} from './Index.styled';

interface GameCardProps {
	title: string;
	description: string;
	imageUrl: string;
}

const GameCard = (props: GameCardProps) => {
	const { title, description, imageUrl } = props;

	return (
		<GameCardContainer>
			<GameCardImage>
				<img src={imageUrl || '/assets/images/game-card-1.png'} alt='' />
			</GameCardImage>

			<GameCardBody>
				<GameCardTitle>{title}</GameCardTitle>
				<GameCardDescription>{description}</GameCardDescription>
			</GameCardBody>
		</GameCardContainer>
	);
};

export default GameCard;
