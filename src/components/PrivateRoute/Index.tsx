import { Navigate, Outlet } from 'react-router-dom';
import auth from '../../services/auth';

const PrivateRoute = () => {
	if (!auth.isLoggedIn()) return <Navigate to='/signin' />;
	if (auth.isInitialLogin()) return <Navigate to='/change-password' />;

	return <Outlet />;
};

export default PrivateRoute;
