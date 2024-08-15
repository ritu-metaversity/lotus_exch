interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  
  interface LoginRequestBody {
    username: string;
    password: string;
    device_info: string;
    browser_info: string;
    dom: string;
    city: string;
    region: string;
    org: string;
  }
  
  interface LoginResponse {
    token: string;
    user: User;
    domain: Domain;
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
  