import { Global, Module } from '@nestjs/common';

import { HashModule } from 'src/auth/hash/hash.module';
import { JwtAuthModule } from 'src/auth/jwt-auth/jwt-auth.module';
import { ExceptionsModule } from 'src/exceptions/exceptions.module';
import { CreatePedido } from './create/CreatePedidos.service';
import { CreateUser } from './create/CreateUser.service';
import { ReadUser } from './read/ReadUser.service';

@Global()
@Module({
  imports: [HashModule,ExceptionsModule,JwtAuthModule],
  providers: [
    ReadUser,
    CreatePedido,
    CreateUser
  ],
  exports: [ReadUser,CreatePedido,CreateUser]
})
export class CRUDModule {}