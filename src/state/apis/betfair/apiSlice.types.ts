type BaseResponse = {
	status: boolean;
	message: null | string;
};

export type Match = {
	matchName: string;
	matchId: number;
	openDate: string;
	inPlay: boolean;
	team1Back: number;
	team1Lay: number;
	team2Back: number;
	team2Lay: number;
	drawBack: number;
	drawLay: number;
	bm: boolean;
	F: boolean;
	GM: boolean;
	SM: boolean;
	channelId: string;
};

type Sport = {
	sportid: number;
	name: string;
	matchList: Array<Match>;
};

export type GetMatchesBySports = {
	data: Array<Sport>;
} & BaseResponse;

export type BaseFancy = {
	mid: string;
	t: string;
	sid: string;
	nation: string;
	b1: number | string;
	bs1: number | string;
	l1: number | string;
	ls1: number | string;
	gstatus: string;
	maxBet: number;
	minBet: number;
	betDelay: number;
};

type OddEven = BaseFancy;

type Fancy3 = BaseFancy;

type Fancy2 = BaseFancy;

type Bookmaker = BaseFancy & {
	maxBet: number;
	minBet: number;
	betDelay: number;
	matchName: string;
	maxBetRate: number;
	minBetRate: number;
	betlock: boolean;
	display_message: string;
};

type Odd = {
	runners: Array<Runner>;
	matchName: string;
	marketId: string;
	isMarketDataDelayed: boolean;
	status: string;
	inplay: boolean;
	Name: string;
	eventTime: string;
	lastMatchTime: string;
	maxBetRate: number;
	minBetRate: number;
	betDelay: number;
	maxBet: number;
	minBet: number;
	betlock: boolean;
	display_message: string;
};

type Runner = {
	name: string;
	selectionId: string;
	ex: Ex;
};

type Ex = {
	availableToBack: Array<AvailableToBack>;
	availableToLay: Array<AvailableToBack>;
};

type AvailableToBack = {
	price: number;
	size: number;
};

export type MatchDetails = {
	Odds: Array<Odd>;
	Bookmaker: Array<Bookmaker>;
	Fancy: Array<any>;
	Fancy2: Array<Fancy2>;
	Fancy3: Array<Fancy3>;
	Khado: Array<any>;
	Ball: Array<any>;
	Meter: Array<any>;
	OddEven: Array<OddEven>;
};
