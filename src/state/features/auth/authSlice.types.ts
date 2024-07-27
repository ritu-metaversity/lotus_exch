import { User } from '../../../services/auth';

export interface AuthState {
	user: User | null;
	isLoggedIn: boolean;
	token: string | null;
	isInitialLogin: boolean;
}
