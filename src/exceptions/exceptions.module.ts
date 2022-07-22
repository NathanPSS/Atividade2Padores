import { Global, Module } from '@nestjs/common';
import { PrismaForbididdenService } from './prisma-forbididden/prisma-forbididden.service';
import { ForbiddenExceptionService } from './forbidden-exception/forbidden-exception.service';


@Global()
@Module({
  providers: [PrismaForbididdenService, ForbiddenExceptionService],
  exports: [PrismaForbididdenService,ForbiddenExceptionService]
})
export class ExceptionsModule {}
