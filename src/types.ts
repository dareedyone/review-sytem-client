export interface User {
	username: string;
	name?: string;
	password: string;
}

export type UserLogin = Omit<User, "name">;

export interface UserWithToken {
	token: string;
	username: string;
	name: string;
	type?: string;
}

export interface Review {
	text: string;
	rating: number;
}
