import { Global, Module } from '@nestjs/common';
import { PrismaPostGresService } from './client-postgree/prisma.postgree.service';
import { PrismaMongoDbService } from './client-mongodb/prisma-mongo-db.service';
import { HashModule } from 'src/auth/hash/hash.module';
import { ExceptionsModule } from 'src/exceptions/exceptions.module';
import { CRUDModule } from './IBDService/CRUD.module';

@Global()
@Module({
  imports: [HashModule,ExceptionsModule,CRUDModule],
  providers: [PrismaPostGresService, PrismaMongoDbService],
  exports: [PrismaPostGresService]
})
export class PrismaModule {}
