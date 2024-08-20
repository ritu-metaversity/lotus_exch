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

interface userDataResponse {
  status: boolean;
  message: null;
  user: User;
  domain: Domain;
  banners: Banner[];
  socialMedia: any[];
  depositBonus: string;
  project: string;
  systemMaintainance: boolean;
  baziwala: number;
  app: null;
}

interface Banner {
  id: number;
  domain: string;
  image: string;
}

interface Domain {
  id: number;
  name: string;
  value: string;
  logo: string;
  mobile: string;
  headline: string;
  show_register: number;
  admin_headline: string;
  facebook: string;
  instagram: string;
  telegram: string;
  email: string;
  login_banner: string;
  alternate_url: string;
}

interface User {
  mstrid: number;
  mstrname: string;
  mstruserid: string;
  domain: string;
  mstrremarks: string;
  usetype: number;
  loginid: number;
  match_stake: string;
  balance: number;
  liability: number;
  p_l: number;
  freechips: number;
  chip: number;
  ipadress: string;
  usecrdt: string;
  parentId: number;
  mstrlock: number;
  partner: string;
  partner_cricket: string;
  partner_soccer: string;
  partner_tennis: string;
  partner_casino: string;
  bet_lock: number;
  isPartnership: number;
  account_closed: number;
  stakeLimit: number;
  Commission: string;
  active: number;
  password_changed: number;
  allow_deposit_withdraw: number;
  allow_bet_delete: number;
  allow_result_declare: number;
  allow_result_revoke: number;
  profit_loss: string;
  payment_type: number;
  permissions: null;
  question: null;
  gamehub_password: string;
  phone: null;
  phone_1: null;
  phone_2: null;
  DOB: null;
  iType: number;
  stakes: number[];
  TokenId: string;
  parentIds: number[];
  singleDealer: boolean;
}

interface AccRespopnse {
  status: boolean;
  message: null;
  data: Acc[];
  meta: Meta;
  openingBalance: number;
}

interface Meta {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: null;
  previous_page_url: null;
}

interface Acc {
  Sdate: string;
  mstrUserId: string;
  userId: number;
  Credit: number;
  Debit: number;
  balance: number;
  Narration: string;
  marketId: string;
  matchId: number;
  fancyId: null;
}

interface ProfitLossReq {
  page: number;
  sportId: number;
  fromDate: string;
  toDate: string;
}

interface ProfitLossRes {
  meta: Meta;
  data: ProfitLoss[];
}

interface ProfitLoss {
  UserId: number;
  sport_id: number;
  EventName: string;
  PnL: string;
  Comm: string;
  matchId: number;
  MarketId: string;
  fancyId: number;
  settle_date: string;
}

interface betHistoryReq {
  page_no: number;
  sport_id: string;
  from_date: string;
  to_date: string;
  bet_type:string;
  type:1
}



interface betHistoryRes {
  data: Data;
}

interface Data {
  meta: Meta;
  data: Datum[];
}

interface betHistory {
  MstCode: number;
  UserId: number;
  UserName: string;
  MatchId: number;
  MarketId: string;
  SelectionId: number;
  selectionName: string;
  MstDate: string;
  Odds: string;
  Stack: number;
  P_L: string;
  isBack: number;
  IsMatched: number;
  ip: string;
  volume: number;
  void: number;
  is_fancy: number;
  matchName: string;
  marketName: null | string;
  sportsId: number;
  Description: string;
  Type: string;
  Profit: null | string;
  Liability: null | string;
  STATUS: string;
  sportName: string;
}






interface CasinoResponse {
  data: Casino[];
}

interface Casino {
  game_id: string;
  game_name: string;
  category: string;
  provider_name: string;
  sub_provider_name: string;
  status: string;
  url_thumb: string;
  game_code: string;
  product: string;
}


interface GmeUrlReq{
  desktop:boolean,
  game_code:string,
  lobby_url:string
}
interface GmeUrlRes{
  data:GmeUrl,
}


interface GmeUrl {
  url: string;
}