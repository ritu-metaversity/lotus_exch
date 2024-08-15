interface DashboardResponse {
  status: boolean;
  message: null;
  data: Data1[];
}

interface Data1 {
  matchName: string;
  matchid: number;
  oddslimit: number;
  volumelimit: string;
  MstDate: string;
  has_bookmaker: number;
  country_code: null | string;
  marketid: null | string;
  runner_json: null | string;
  isbetallowedonmanualmatchodds: null | number;
  sportname: string;
  sportid: number;
  series_name: string;
  seriesid: number;
  isfancy: number;
  data: Data2 | null;
  isFav: number;
}

interface Data2 {
  id: string;
  marketDefinition: MarketDefinition;
  rc: Rc[];
  updated_at: string;
}

interface Rc {
  batb: number[][];
  batl: number[][];
  id: number;
}

interface MarketDefinition {
  inPlay: boolean;
  status: string;
  totalMatched: number;
  runners: Runner[];
}

interface Runner {
  id: number;
  status: string;
  sortPriority: number;
}