import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { LojasModule } from './lojas/lojas.module';
import { PrismaModule } from './client/prisma/prisma.module';
import { ExceptionsModule } from './exceptions/exceptions.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule,
    UserModule, 
    PedidosModule,
    LojasModule, 
    PrismaModule, 
    ExceptionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
