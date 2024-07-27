import { ReactNode } from 'react';
import {
	DefaultStaticContentContainer,
	SportsHeaderContainer,
	SportsHeaderContent,
	SportsHeaderDescription,
	SportsHeaderName,
} from './Index.styled';

interface SportsHeaderProps {
	icon?: ReactNode;
	name: ReactNode;
	content?: ReactNode;
	type?: 'back-lay' | 'yes-no';
}

const SportsHeader = (props: SportsHeaderProps) => {
	const { icon, name, content } = props;

	return (
		<SportsHeaderContainer className='sports-header'>
			<SportsHeaderDescription className='sports-header__description'>
				<>{icon}</>
				<SportsHeaderName className='sports-header__name'>
					{name}
				</SportsHeaderName>
			</SportsHeaderDescription>
			<SportsHeaderContent className='sports-header__content'>
				{content || <DefaultStaticContent />}
			</SportsHeaderContent>
		</SportsHeaderContainer>
	);
};

export default SportsHeader;

const DefaultStaticContent = () => {
	return (
		<DefaultStaticContentContainer className='default-static-content-container'>
			<span>1</span>
			<span>X</span>
			<span>2</span>
		</DefaultStaticContentContainer>
	);
};
