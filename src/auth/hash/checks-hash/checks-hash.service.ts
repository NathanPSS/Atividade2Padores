import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';

@Injectable()
export class ChecksHashService {
  constructor(){}
  public async checksPassword(hash,password) {
    const pwMatches = await argon.verify(hash,password)
    if (!pwMatches){
      throw new Error()
    }
  }
}
