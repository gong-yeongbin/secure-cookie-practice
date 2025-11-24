import { Injectable } from '@nestjs/common';

export type User = {
	userId: number;
	username: string;
	password: string;
};

@Injectable()
export class UserService {
	private readonly users = [
		{
			userId: 1,
			username: 'john',
			password: 'changeme',
		},
		{
			userId: 2,
			username: 'maria',
			password: 'guess',
		},
	];

	findUserName(username: string): User | undefined {
		return this.users.find((user) => user.username === username);
	}

	findUserId(userId: number): User | undefined {
		return this.users.find((user) => user.userId === userId);
	}
}
