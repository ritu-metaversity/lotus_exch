interface SwipeView {
	home: boolean;
}

export interface ClientState {
	swipeView: SwipeView;
	betData:any
	betDataFancy:string
	selectedSid:string
	profits:{
		Odds:{[x:string]:ProfitInterface[]} ,
		Bookmaker: ProfitInterface[],
		Fancy: ProfitInterface[],
	  }
}

export interface ProfitInterface {
	value: number;
	sid?: string | number;
	mid?: string;
	title: string;
  }