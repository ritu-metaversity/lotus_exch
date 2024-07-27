import {
	SportsButtonContainer,
	SportsButtonBody,
	SportsButtonHeading,
	SportsButtonTitle,
	SportButtonIcon,
} from './Index.styled';
import { ReactNode } from 'react';

interface SportButtonInterface {
	label: ReactNode;
	icon: ReactNode;
	onButtonClick?: () => void;
}

const SportsButton = ({
	label = 'Indian Card Games',
	icon,
	onButtonClick,
}: SportButtonInterface) => {
	return (
		<SportsButtonContainer onClick={!!onButtonClick ? onButtonClick : () => {}}>
			<SportsButtonBody>
				<SportsButtonHeading>{label}</SportsButtonHeading>
				<SportsButtonTitle>{label}</SportsButtonTitle>
				<SportButtonIcon>{icon}</SportButtonIcon>
			</SportsButtonBody>
		</SportsButtonContainer>
	);
};

export default SportsButton;
