import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class SignTokenService {
    constructor(
        private jwt :JwtService,
        private config :ConfigService,
    ){}
    public async signToken(userId :number,email :string) {
        const payload = {
            sub: userId,
            email
        }
        const secret = this.config.get('JWT_SECRET')
        return { acess_token :this.jwt.sign(payload,{
            expiresIn: '15m',
            secret: secret
        })
    }}
}
