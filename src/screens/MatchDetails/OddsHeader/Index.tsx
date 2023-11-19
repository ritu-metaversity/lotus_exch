import { ComponentProps } from 'react';
import SportsHeader from '../../../components/SportsHeader/Index';
import {
	OddsHeaderContainer,
	OddsHeaderContentContainer,
} from './Index.styled';

type OddsHeaderProps = ComponentProps<typeof SportsHeader>;

const OddsHeader = (props: OddsHeaderProps) => {
	return (
		<OddsHeaderContainer className='odds-header'>
			<SportsHeader
				{...props}
				content={<OddsHeaderContent type={props.type} />}
			/>
		</OddsHeaderContainer>
	);
};

interface OddsHeaderContent {
	type?: 'back-lay' | 'yes-no';
}

const OddsHeaderContent = (props: OddsHeaderContent) => {
	const { type } = props;

	return (
		<OddsHeaderContentContainer className='odds-header-content'>
			<p>{type === 'back-lay' ? 'Back' : type === 'yes-no' ? 'No' : ''}</p>
			<p>{type === 'back-lay' ? 'Lay' : type === 'yes-no' ? 'Yes' : ''}</p>
		</OddsHeaderContentContainer>
	);
};

export default OddsHeader;
