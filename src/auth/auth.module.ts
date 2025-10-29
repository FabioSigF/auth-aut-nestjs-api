import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.AUTH_JWT_SECRET,
      signOptions: {
        expiresIn: '2h',
        algorithm: 'HS256',
        issuer: process.env.AUTH_JWT_ISSUER,
        audience: process.env.AUTH_JWT_AUDIENCE,
      },
      verifyOptions: {
        issuer: process.env.AUTH_JWT_ISSUER,
        audience: process.env.AUTH_JWT_AUDIENCE,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
