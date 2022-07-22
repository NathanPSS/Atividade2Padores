import { Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { ForbiddenExceptionService } from '../forbidden-exception/forbidden-exception.service';



@Injectable()
export class PrismaForbididdenService extends ForbiddenExceptionService {
    constructor(){
        super()
    }
    public prismaForbidden(error) {
      return  this.checksInstance(error)
    }
    private checksInstance(error) {
      if (error instanceof PrismaClientKnownRequestError){
        return this.checksCode(error.code)
      }
    }
    private checksCode(code){
        if(code === 'P2002'){
         return this.trowForbidddenExpection('Dados já Cadastrados')
        }
}
}