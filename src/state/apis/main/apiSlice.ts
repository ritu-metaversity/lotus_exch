import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
	SignUpRes,
	SignUpReq,
	SignInReq,
	SignInRes,
	ChangePasswordRes,
	ChangePasswordReq,
} from './apiSlice.types'; 
import toast from 'react-hot-toast';
import { navGlobalRef } from '../../../screens/Layout/Index';

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_APP_API_URL,
	prepareHeaders:(headers)=>{
		headers.set("Authorization",`Bearer ${localStorage.getItem("token")}`)
	},
	// headers: {
	// 	"Content-Type": "application/json",
	// 	Authorization:`Bearer ${localStorage.getItem("token")}` ,
	//   },
});

export const mainApiSlice = createApi({
	baseQuery,
	reducerPath: 'mainApi',
	endpoints: builder => ({
		signUp: builder.mutation<SignUpRes, SignUpReq>({
			query: payload => ({
				url: '/user/self-register',
				method: 'POST',
				body: payload,
			}),
		}),

		singIn: builder.mutation<SignInRes, SignInReq>({
			query: payload => ({
				url: '/login/client-login',
				method: 'POST',
				body: payload,
			}),
		}),

		changePassword: builder.mutation<ChangePasswordRes, ChangePasswordReq>({
			query: payload => ({
				url: '/user/first-login-cp',
				method: 'POST',
				body: payload,
			}),
		}),

		getBalanceUpdate: builder.query({
			query: () => ({url : `/enduser/get-user-balance`,
			method:"post"
		})
		}),
		getStackDetails: builder.query({
			query: () => ({url : `/enduser/get-stake-button`,
			method:"post"
		})
		}),
		getAllCasionType: builder.query({
			query: () => ({url : `/casino/all-casino-types`,
			method:"post"
		})
		}),
		getJwtToken: builder.query({
			query: () => ({url : `/util/validate-jwt-token`,
			method:"post"
		}),
		
		onQueryStarted:async (_,{queryFulfilled,})=>{

			const data = await queryFulfilled.catch((error:any)=>{
				if(error?.error?.data?.status === false){
					navGlobalRef&&	navGlobalRef("/home");
					localStorage.clear();
					toast.error(data?.data?.message)
	
				}else{
					toast.error(data?.data?.message)
	
				}
			console.log(error?.error,"mhkjhk");
			})
		}
		}),
		getStakeButton: builder.query({
			query: () => ({url : `/enduser/get-stake-button`,
			method:"post"
		})
		}),
		withdrawRequestClient: builder.query({
			query: () => ({url : `/enduser/withdraw-request-client`,
			method:"post"
		})
		}),

		

		



		// mutation
		
		PlaceBet: builder.mutation({
			query: (payload) => ({url : `/enduser/place-bets`,
			method:"post",
			body: payload,
		}),
		onQueryStarted:async (_,{queryFulfilled})=>{
			try{

				const data = (await queryFulfilled)
				console.log(data,"huihiu");
				if(data?.data?.status === true){
					toast.success(data?.data?.message)
					
				}
				else{
					toast.error(data?.data?.message)
				}
			} catch(data:any){
				console.log(data,"error-error");
				
				toast.error(data?.error?.data?.message)

			}
		}
		}),
		accountStatment: builder.mutation({
			query: (payload) => ({url : `/enduser/account-statement`,
			method:"post",
			body: payload,
		})
		}),
		isSelfByAppUrl: builder.mutation({
			query: (payload) => ({url : `/login/is-self-by-app-url`,
			method:"post",
			body:payload
		})
		}),
		unsettledBet: builder.mutation({
			query: (payload) => ({url : `/enduser/unsettled-bet`,
			method:"post",
			body:payload
		})
		}),
		setStakeButton: builder.mutation({
			query: (payload) => ({url : `/enduser/set-stake-button`,
			method:"post",
			body:payload
		}),
		onQueryStarted:async (_,{queryFulfilled})=>{
			try{
			const data = await queryFulfilled
			console.log(data,"huihiu");
			if(data?.data?.status === true){
				toast.success(data?.data?.message)

			}else{
				toast.error(data?.data?.message)
			}
		} catch(data:any){
			console.log(data,"error-error");
			
			toast.error(data?.error?.data?.message)

		}
		}
		}),
		
		changePasswordFirstLogin: builder.mutation({
			query: (payload) => ({url : `/enduser/change-password`,
			method:"post",
			body:payload
		}),
		onQueryStarted:async (_,{queryFulfilled})=>{
			const data = await queryFulfilled
			console.log(data,"huihiu");
			if(data?.data?.status === true){
				localStorage.clear();

			}else{
				toast.error(data?.data?.message)
			}
		}
		}),
		changePasswordNewOld: builder.mutation({
			query: (payload) => ({url : `/user/first-login-cp`,
			method:"post",
			body:payload,
			
		}),
		onQueryStarted:async (_,{queryFulfilled,})=>{
			const data = await queryFulfilled
			console.log(data,"huihiu");
			// if(data?.data?.status === true){
			// 	navGlobalRef&&	navGlobalRef("/signin");
			// 	localStorage.clear();
			// 	toast.success(data?.data?.message)

			// }else{
			// 	toast.error(data?.data?.message)
			// }
		}
		}),
		LeftMenuDataOpen: builder.mutation({
			query: (payload) => ({url : `/enduser/left-menu-data-open`,
			method:"post",
			body:payload
		})
		}),
		searchBetMarketAndUser: builder.mutation({
			query: (payload) => ({url : `/bets/search-bet-market-and-user`,
			method:"post",
			body:payload
		})
		}),
		profiteAndLossMatchWise: builder.mutation({
			query: (payload) => ({url : `/report/profit-loss-match-wise`,
			method:"post",
			body:payload
		})
		}),
		activeSportsList: builder.mutation({
			query: (payload) => ({url : `/enduser/active-sport-list`,
			method:"post",
			body:payload
		})
		}),
		userOddsPnl: builder.query({
			query: (payload) => ({url : `/enduser/user-odds-pnl`,
			method:"post",
			body:payload
		})
		}),
		userFancyPnl: builder.query({
			query: (payload) => ({url : `/enduser/user-fancy-pnl`,
			method:"post",
			body:payload
		})
		}),
		betHistory: builder.mutation({
			query: (payload) => ({url : `/enduser/bet-list-history`,
			method:"post",
			body:payload
		})
		}),
		depositeRequestClient: builder.mutation({
			query: (payload) => ({url : `/enduser/depsosit-request-client`,
			method:"post",
			body:payload
		})
		}),
		betListByMatchId: builder.mutation({
			query: (payload) => ({url : `/enduser/bet-list-by-matchid`,
			method:"post",
			body:payload
		})
		}),
	}),
});

export const {
	useSignUpMutation,
	useSingInMutation,
	useChangePasswordMutation,
	useGetBalanceUpdateQuery,
	useGetStackDetailsQuery,
	useGetAllCasionTypeQuery,
	useGetJwtTokenQuery,
	useGetStakeButtonQuery,
	useWithdrawRequestClientQuery,
	useUserFancyPnlQuery,
	useUserOddsPnlQuery,

	usePlaceBetMutation,
	useAccountStatmentMutation,
	useIsSelfByAppUrlMutation,
	useUnsettledBetMutation,
	useSetStakeButtonMutation,
	useChangePasswordFirstLoginMutation,
	useChangePasswordNewOldMutation,
	useLeftMenuDataOpenMutation,
	useSearchBetMarketAndUserMutation,
	useProfiteAndLossMatchWiseMutation,
	useActiveSportsListMutation,
	useBetHistoryMutation,
	useDepositeRequestClientMutation,
	useBetListByMatchIdMutation,

} = mainApiSlice;
