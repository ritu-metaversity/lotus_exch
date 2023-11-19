import { OddOverlayLabelContainer } from './Index.styled';

interface OddOverlayLabelProps {
	label: string;
}

const OddOverlayLabel = ({ label }: OddOverlayLabelProps) => {
	return (
		<OddOverlayLabelContainer className='odd-overlay-label'>
			{label}
		</OddOverlayLabelContainer>
	);
};

export default OddOverlayLabel;
