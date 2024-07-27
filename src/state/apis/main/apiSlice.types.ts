export type SignUpRes = {
	status: boolean;
	message: string;
	username: string;
	password: string;
};

export type SignUpReq = {
	userId: string;
	username: string;
	password: string;
	mobile: string;
	appUrl: string;
};

export type SignInRes = {
	status?: boolean;
	message?: string;
	userId: string;
	userType: string;
	username: string;
	token: string;
	passwordtype: 'old' | 'new';
	userTypeInfo: number;
};

export type SignInReq = {
	userId: string;
	password: string;
	appUrl: string;
};

export type ChangePasswordRes = {
	status: boolean;
	message: string;
	data: null;
};

export type ChangePasswordReq = {
	token: string;
	oldPassword: string;
	newPassword: string;
	confirmNewPassword?: string;
	userid: string;
};

export type AllocatedCasinoKey =
	| 'Aura'
	| 'Super Nova'
	| 'QTech'
	| 'Virtual'
	| 'SportBook';

export type AllocatedCasino = {
	[x in AllocatedCasinoKey]?: CasinoAllocItem;
};

export interface CasinoAllocItem {
	name: string;
	casinoId: number;
	active: boolean;
}