import { InputBase } from '@mui/material';
import Icon from '../common/Icon/Index';
import { NavbarInputContainer } from './Index.styled';

const NavbarSearch = () => {
	return (
		<NavbarInputContainer>
			<InputBase
				startAdornment={
					<Icon src='/assets/icons/search.svg#search' isSvgIcon />
				}
				placeholder='Search Events'
			/>
		</NavbarInputContainer>
	);
};

export default NavbarSearch;
