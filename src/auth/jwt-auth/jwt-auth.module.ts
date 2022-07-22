import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SignTokenService } from './sign-token/sign-token.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';
import { ValidateTokenService } from './validate-token/validate-token.service';

@Module({
  imports: [JwtModule.register({})],
  providers: [SignTokenService, JwtStrategyService, ValidateTokenService],
  exports: [SignTokenService,JwtStrategyService]
})
export class JwtAuthModule {}
