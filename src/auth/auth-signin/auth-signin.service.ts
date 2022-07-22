import { ForbiddenException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { user } from "@prisma/client";
import { PrismaPostGresService } from "src/client/prisma/client-postgree/prisma.postgree.service";
import { ReadUser } from "src/client/prisma/IBDService/read/ReadUser.service";
import { UserDTO } from '../dto/user.auth.dto'


@Injectable()
export class AuthSigninService {
  constructor(
  private user :ReadUser
  ){}
  public async signin(dto :UserDTO) {
      const result = await this.user.read(dto,new PrismaPostGresService(new ConfigService()))
      if (result instanceof ForbiddenException){
        const exception = new ForbiddenException('Email ou Senha Incorretos')
        throw exception
       }else {
        const user :user = result
        return user.id
       }
  }
}
