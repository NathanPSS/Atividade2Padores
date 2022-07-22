import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';

@Injectable()
export class GenerateHashService {
    public async generateHash(password) {
        return await argon.hash(password)
    }
}
