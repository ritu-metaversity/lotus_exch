
import { NavigateFunction, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';
import { useGetJwtTokenQuery } from '../../state/apis/main/apiSlice';

export let navGlobalRef: NavigateFunction
const Layout = () => {
	const navigate = useNavigate();

	// // const {data,err} =useGetJwtTokenQuery()
	const { data: jwtTokenRespone, error: jwtTokenResponeError } = useGetJwtTokenQuery(undefined, { pollingInterval: 3000, skip: !(localStorage.getItem("token")) })
	console.log(jwtTokenResponeError, jwtTokenRespone, "jwtTokenRespone");
	navGlobalRef = navigate

	const isDesktop = useMediaQuery('(min-width: 1024px)');

	return (
		isDesktop ? <DesktopLayout /> : <MobileLayout />
	);
};

export default Layout;
