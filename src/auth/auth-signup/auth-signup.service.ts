import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaPostGresService } from 'src/client/prisma/client-postgree/prisma.postgree.service';
import { AuthDTO } from '../dto/signup.auth.dto';
import { ConfigService } from '@nestjs/config';
import { CreateUser } from 'src/client/prisma/IBDService/create/CreateUser.service';
import { user } from '@prisma/client';

@Injectable()
export class AuthSignupService {
  constructor(
    private userCreate :CreateUser,
      ){}
      public async signup(dto :AuthDTO) {
          //save the new user
           const result =  await this.userCreate.create(dto,new PrismaPostGresService(new ConfigService()))
           if (result instanceof ForbiddenException){
            throw result
           }else {
            const user :user = result
            return user.id
           }
      }
}
