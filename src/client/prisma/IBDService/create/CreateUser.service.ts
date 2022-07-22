import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AuthDTO } from 'src/auth/dto/signup.auth.dto';
import { GenerateHashService } from 'src/auth/hash/generate-hash/generate-hash.service';
import { PrismaForbididdenService } from 'src/exceptions/prisma-forbididden/prisma-forbididden.service';




@Injectable()
export class CreateUser {
  constructor(
    private generateHash :GenerateHashService,
    private checksForbidden :PrismaForbididdenService, 
  ){}
  public async create(dto :AuthDTO,BDService :PrismaClient) {
    try{
      const user = BDService.user.create({
        data:{
          name: dto.name,
          email: dto.email,
          senha: await this.generateHash.generateHash(dto.password)
        }
      })
      return user
    }catch(error){
      return await this.checksForbidden.prismaForbidden(error)
    }
  }
}
