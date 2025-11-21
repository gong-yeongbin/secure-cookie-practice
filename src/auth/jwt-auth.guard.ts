import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constans';

@Injectable()
export class JwtAuthGuard implements CanActivate {
	constructor(private readonly jwtService: JwtService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		try {
			const request = context.switchToHttp().getRequest();
			const accessToken = request.cookies?.access_token;

			this.jwtService.verify(accessToken, { secret: jwtConstants.secret });
			return true;
		} catch (e) {
			throw new UnauthorizedException();
		}
	}
}
