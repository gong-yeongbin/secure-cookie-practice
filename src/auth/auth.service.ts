import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService
	) {}

	validateUser(username: string, pass: string) {
		const user = this.userService.findUserName(username);
		if (user?.password === pass) {
			const { password, ...result } = user;
			return result;
		}

		return null;
	}

	login(user: any) {
		const payload = { username: user.username, sub: user.userId };
		return this.jwtService.sign(payload);
	}
}
