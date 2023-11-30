import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import { themeSettings } from './theme';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ToastContainer from './components/common/ToastContainer/Index';
import PrivateRoute from './components/PrivateRoute/Index';
import Layout from './screens/Layout/Index';
import Home from './screens/Home/Index';
import SignIn from './screens/SignIn/Index';
import ChangePassword from './screens/ChangePassword/Index';
import MatchDetails from './screens/MatchDetails/Index';
import AllSportsPages from './components/AllSportsPages/AllSportsPages';
import BettingProfitAndLoss from './components/RightSideBarMobileView/RightSideBarPage/BettingProfitAndLoss';
import TransferStatement from './components/RightSideBarMobileView/RightSideBarPage/TransferStatement';
import ChangePasswordMobleView from './components/RightSideBarMobileView/RightSideBarPage/ChangePasswordMobleView';
import RulesAndRegulations from './components/RightSideBarMobileView/RightSideBarPage/RulesAndRegulations';
import SettingsStack from './components/RightSideBarMobileView/RightSideBarPage/SettingsStack';
import ExclusionPolicy from './components/RightSideBarMobileView/RightSideBarPage/ExclusionPolicy';
import ResponsibleGambling from './components/RightSideBarMobileView/RightSideBarPage/ResponsibleGambling';
import Privacypolicy from './components/RightSideBarMobileView/RightSideBarPage/Privacypolicy';
import OpenbetsForMobile from './components/RightSideBarMobileView/RightSideBarPage/OpenbetsForMobile';
import AccountStatement from './components/RightSideBarMobileView/RightSideBarPage/AccountStatement';
import OpenBetsDeskTop from './components/RightSideBarDesktopView/AccountsettingSidePages/OpenBetsDeskTop';
import AccountStatementDesk from './components/RightSideBarDesktopView/AccountsettingSidePages/AccountStatementDesk';
import WithDraw1 from './components/RightSideBarMobileView/RightSideBarPage/DepositeAndWithdraw/WithdrawPage/WithDraw1';
import Deposit from './components/RightSideBarMobileView/RightSideBarPage/DepositeAndWithdraw/DepositPages/Deposit';
import CasinoGamePage from './components/AllCasino/GamePage/CasinoGamePage';
import SportsBook from './components/AllCasino/SportsBook/SportsBook';
import LiveCasino from './components/AllCasino/LiveCasino/LiveCasino';
import CardGame from './components/AllCasino/CardGame/CardGame';
import GamePageMain from './components/AllCasino/LiveCasino/GamePageMain';
import SlotGames from './components/AllCasino/SlotGames/SlotGames';
import GamePlayPage from './components/AllCasino/SlotGames/GamePlayPage';
import MyMarket from './components/common/List/MyMarket';
import CardGamePlay from './components/AllCasino/CardGame/CardGamePlay';
import FanctasyGameList from './screens/Home/PopularGamesSection/FantasyGameList';
import FantasyGamePage from './screens/Home/PopularGamesSection/FantasyGamePage';
import LotteryGameList from './screens/Home/IndianCardGamesSection/LotteryGameList';
import LotteryCasionListGamePage from './screens/Home/IndianCardGamesSection/LotteryCasionListGamePage';
import GamePageInternational from './screens/Home/CasinoGamesSection/GamePageInternational';


const App = () => {

	const theme = createTheme(themeSettings());

	return (
		<Router>
			<ToastContainer />
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes>
					<Route element={<Layout />}>
						{/* PUBLIC ROUTES */}
						<Route path="home" element={<Home />} />
						{/* <Route path='/signup' element={<SignUp />} /> */}
						<Route path='match-details/:matchId' element={<MatchDetails />} />
						<Route path='gameDetail/:id' element={<AllSportsPages />} />

						{/* Right Side Routes For Mobile View */}
						<Route path='open-bets' element={<OpenbetsForMobile />} />
						<Route path='Betting-Profit-&-Loss' element={<BettingProfitAndLoss />} />
						<Route path='Transfer-Statement' element={<TransferStatement />} />
						<Route path='Account-Statement' element={<AccountStatement />} />
						<Route path='Change-Password' element={<ChangePasswordMobleView />} />
						<Route path='Rules-&-Regulations' element={<RulesAndRegulations />} />
						<Route path='Settings-Stack' element={<SettingsStack />} />
						<Route path='Exclusion-Policy' element={<ExclusionPolicy />} />
						<Route path='Responsible-Gambling' element={<ResponsibleGambling />} />
						<Route path='Privacy-policy' element={<Privacypolicy />} />
						<Route path='/live-casino' element={<LiveCasino />} />
						<Route path='/Slot-Games' element={<SlotGames />} />
						<Route path='/Slot-Games-play' element={<GamePlayPage />} />
						<Route path='/Card-Games-play' element={<CardGamePlay />} />
						<Route path='/Fantasy-Game-List' element={<FanctasyGameList />} />
						<Route path='/Lottery-Game-List' element={<LotteryGameList />} />
						<Route path='/Card-Game' element={<CardGame />} />
						<Route path='/My-Market' element={<MyMarket />} />


						<Route path='Withdraw-amount' element={<WithDraw1 />} />
						<Route path='Deposite-amount' element={<Deposit />} />

						<Route path='My-bets' element={<OpenBetsDeskTop />} />
						<Route path='Account-Statement-Details' element={<AccountStatementDesk />} />



						{/* SEMI PRIVATE ROUTE */}
						<Route path='/change-password' element={<ChangePassword />} />

						{/* PRIVATE ROUTES */}

						<Route element={<PrivateRoute />}>
							<Route path='/private' element={<h1>Private route</h1>} />
						</Route>
					</Route>
					<Route path='/signin' element={<SignIn />} />
					<Route path='/Game-play' element={<CasinoGamePage />} />
					<Route path='/Live-Casino-play' element={<GamePageMain />} />
					<Route path='/Fantasy-Game-play' element={<FantasyGamePage />} />
					<Route path='/Lottery-Game-play' element={<LotteryCasionListGamePage />} />
					<Route path='/International-Game-play' element={<GamePageInternational />} />
					<Route path='/Sports_book' element={<SportsBook />} />
					<Route path="*" element={<Navigate to="/home" />} />

				</Routes>
			</ThemeProvider>
		</Router>
	);
};

export default App;
