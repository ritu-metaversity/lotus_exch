import { SportsButtonContainer, SportsButtonTitle } from './Index.styled';
import { useNavigate } from 'react-router-dom';

// interface SportsButtonProps {
// 	background: string;
// 	icon: ReactNode;
// 	title: ReactNode;
// }

const SportsButton = (menuuuu: any) => {
	const navigate = useNavigate();

	// const { background, icon, title } = props;
	const handleGamename = (val: any) => {
		console.log(val, "sdfsdfsdfsddasdasdasd");
		navigate(`/gameDetail/${val}`)
	}
	console.log(menuuuu?.menuuuu, "vbnhjkiyuty");
	return (
		<SportsButtonContainer backgroundImage={"https://cdn.mac1j.com/gstatic/gemexchimages/greyhound-bg.png"} onClick={() => handleGamename(menuuuu?.menuuuu?.sportId)}>
			<img src="https://cdn.mac1j.com/gstatic/gemexchimages/cricicon.svg" style={{ width: "16px", height: "16px" }} />
			<SportsButtonTitle>{menuuuu?.menuuuu?.sportName}</SportsButtonTitle>
		</SportsButtonContainer>
	);
};

export default SportsButton;
