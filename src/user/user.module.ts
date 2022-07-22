import { Module } from '@nestjs/common';
import { GuardModule } from 'src/auth/guard/guard.module';
import { UserReadCOntroller } from './controllers/template/user.template.controller';
import { CachePedidosModule } from '../pedidos/cache-pedidos/cache-pedidos.module';
import { UserPedidosController } from './controllers/user-pedidos/user-pedidos.controller';
import { SavePedidosService } from '../pedidos/save-pedidos/save-pedidos.service';
import { PrismaModule } from 'src/client/prisma/prisma.module';
import { HomeModule } from './home/home.module';




@Module({
    imports: [GuardModule, CachePedidosModule,PrismaModule, HomeModule],
    controllers: [UserReadCOntroller, UserPedidosController],
    providers: [SavePedidosService],
})
export class UserModule {}
