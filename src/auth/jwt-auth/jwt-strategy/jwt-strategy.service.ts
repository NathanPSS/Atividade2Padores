import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ValidateTokenService } from '../validate-token/validate-token.service';


@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy,'jwt'){
    constructor(
        config :ConfigService,
        private validateJwt :ValidateTokenService,

    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.get('JWT_SECRET'),
        })
    }
    public async validate(payload) {
      return await this.validateJwt.validate(payload)
    }
}
