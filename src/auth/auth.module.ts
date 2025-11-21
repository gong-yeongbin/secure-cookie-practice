import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constans';
import { LocalStrategy } from './local.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
	imports: [
		UserModule,
		JwtModule.register({
			global: true,
			secret: jwtConstants.secret,
			signOptions: { expiresIn: '60s' },
		}),
	],
	controllers: [AuthController],
	providers: [AuthService, LocalStrategy, JwtAuthGuard],
	exports: [AuthService],
})
export class AuthModule {}
