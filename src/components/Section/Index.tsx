import { ReactNode } from 'react';
import {
	SectionHeaderContainer,
	SectionHeaderLeft,
	SectionHeaderRight,
	SectionHeaderTitle,
} from './Index.styled';
import { Link } from 'react-router-dom';

interface SectionHeadingProps {
	heading: ReactNode;
	icon?: ReactNode;
	inplay?: ReactNode;
	content?: ReactNode;
	children?: ReactNode;
}

const Section = (props: SectionHeadingProps) => {

	const { heading, icon, inplay, content, children } = props;
	console.log(inplay, "inplaywfsdfsd");

	return (
		<section className='section'>
			<SectionHeaderContainer className='section__header'
				style={{ backgroundColor: inplay === "true" ? '#257B23' : inplay === "game" ? "" : "#cc5f37" }}>
				<SectionHeaderLeft>
					{icon}
					<SectionHeaderTitle className='section__header__title'

					>
						<span style={{ fontSize: "17px" }}>{heading}</span>
						{inplay === "true" ?
							<Link to="/open-bets" style={{ color: "white", cursor: "pointer" }}>Open Bets</Link>
							:
							""
						}
					</SectionHeaderTitle>
				</SectionHeaderLeft>

				<SectionHeaderRight className='section__content'>
					{content}
				</SectionHeaderRight>
			</SectionHeaderContainer>
			{children}
		</section >
	);
};

export default Section;
