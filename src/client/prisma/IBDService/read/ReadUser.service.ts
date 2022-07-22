import { Injectable } from "@nestjs/common"
import { PrismaClient } from "@prisma/client"
import { UserDTO } from "src/auth/dto/user.auth.dto"
import { ChecksHashService } from "src/auth/hash/checks-hash/checks-hash.service"
import { ForbiddenExceptionService } from "src/exceptions/forbidden-exception/forbidden-exception.service"


@Injectable()
export class ReadUser {
    constructor(
        private checksForbidden :ForbiddenExceptionService, 
        private checksHash :ChecksHashService,
    ){}
    public async read(dto :UserDTO,BDService :PrismaClient) {
        try{
         const user = await BDService.user.findUnique({
          where: {
            email: dto.email,
          }
         })
         await this.checksHash.checksPassword(user.senha,dto.password)
         return user
      } catch {
        return await this.checksForbidden.trowForbidddenExpection()
      }
      }
}