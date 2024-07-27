import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import { themeSettings } from './theme';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Layout from './screens/Layout/Index';
import Home from './screens/Home/Index';

const App = () => {

	const theme = createTheme(themeSettings());

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes>
					<Route element={<Layout />}>
						{/* PUBLIC ROUTES */}
						<Route path="home" element={<Home />} />
						
						</Route>
				</Routes>
			</ThemeProvider>
		</Router>
	);
};

export default App;
