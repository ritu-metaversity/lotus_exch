import { SignInRes } from '../state/apis/main/apiSlice.types';

export interface User extends Omit<SignInRes, 'status' | 'message'> {}

class AuthService {
	readonly userKey = 'user';
	readonly tokenKey = 'token';

	setUser(user: User) {
		localStorage.setItem(this.userKey, JSON.stringify(user));
	}

	setToken(token: string) {
		localStorage.setItem(this.tokenKey, token);
	}

	isLoggedIn(): boolean {
		return !!this.getUser() && !!this.getToken();
	}

	isInitialLogin(): boolean {
		return this.getUser()?.passwordtype === 'old';
	}

	getUser(): User | null {
		const user: User | null = JSON.parse(
			localStorage.getItem(this.userKey) ?? 'null'
		);

		return user;
	}

	getToken(): string | null {
		const token = localStorage.getItem(this.tokenKey) ?? null;

		return token;
	}

	logout() {
		localStorage.removeItem(this.userKey);
		localStorage.removeItem(this.tokenKey);
	}
}

export default new AuthService();
